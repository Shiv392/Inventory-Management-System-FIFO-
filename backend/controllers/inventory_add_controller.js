const produce_inventory_event = require('../services/kafka_producer');

const add_product_controller = async (req, res) => {
  try {
    const { product_name, quantity, unit_price } = req.body;

    if (!product_name || !quantity || !unit_price) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const event = {
      product_name,
      quantity: Number(quantity),
      unit_price: Number(unit_price),
      event_type: 'ADD_PRODUCT',
      timestamp: new Date().toISOString(),
    };

    await produce_inventory_event(event);

    return res.status(200).json({ message: '✅ Product event sent to Kafka successfully' });
  } catch (err) {
    console.error('Error adding product:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = add_product_controller;
