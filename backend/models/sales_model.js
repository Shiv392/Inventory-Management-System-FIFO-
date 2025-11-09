const pool = require('../config/db_config');

const sales_model = async () => {
  try {
    const query = `
      SELECT 
        s.sale_id,
        s.product_id,
        p.product_name,
        s.quantity,
        s.cost,
        s.timestamp
      FROM sales s
      JOIN products p ON s.product_id = p.product_id
      ORDER BY s.timestamp DESC;
    `;
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    throw err;
  }
};

module.exports = sales_model;
