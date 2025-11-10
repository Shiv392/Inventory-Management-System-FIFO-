const {consumer} = require('../config/kafka_config');
const pool = require('../config/db_config');

const start_consumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const event = JSON.parse(message.value.toString());
      console.log('📥 Event received from Kafka:', event);

      const { product_name, quantity, unit_price } = event;

      try {
        // 1️⃣ Check if product exists
        const existing = await pool.query(
          'SELECT product_id FROM products WHERE product_name = $1',
          [product_name]
        );

        let product_id;

        if (existing.rows.length === 0) {
          // 2️⃣ Insert new product
          const insertProduct = await pool.query(
            'INSERT INTO products (product_name) VALUES ($1) RETURNING product_id',
            [product_name]
          );
          product_id = insertProduct.rows[0].product_id;
          console.log(`🆕 Product added: ${product_name}`);
        } else {
          product_id = existing.rows[0].product_id;
        }

        // 3️⃣ Add inventory batch
        await pool.query(
          'INSERT INTO inventory_batches (product_id, quantity, unit_price) VALUES ($1, $2, $3)',
          [product_id, quantity, unit_price]
        );

        console.log(`📦 Inventory updated for ${product_name}`);
      } catch (err) {
        console.error('Error processing Kafka message:', err);
      }
    },
  });
};

module.exports = start_consumer;