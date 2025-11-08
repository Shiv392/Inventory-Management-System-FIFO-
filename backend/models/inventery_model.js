const pool = require('../config/db_config');

const inventery_model = async()=>{
try{

//1. get all product list 
const fetch_product_query = `select * from products order by product_id`;
const products_res = await pool.query(fetch_product_query);
const products = products_res.rows;

//2. for each product calculate current quentity, total cost and averate cost 
const inventery_data = [];
for(let product of products){
    const {product_id, product_name} = product;

    //3. get total purchase quantity and batches
    const batch_query = `select quantity, unit_price, batch_id 
    from inventory_batches where product_id = $1 order by timestamp asc`;
    const batch_result = await pool.query(batch_query, [product_id]);
    let batches = batch_result.rows;

    //4. get total sold quantity 
    const sales_query = `select quantity from sales where product_id = $1`;
    const sales_res = await pool.query(sales_query, [product_id]);
    const total_sold = sales_res.rows.reduce((acc, row) => acc + Number(row.quantity), 0);

    //5. apply fifo to calculate remaining inventory and total cost 
     let remainingQty = total_sold;
      let totalInventoryCost = 0;
      let currentQuantity = 0;

    for(let batch of batches){
         let qtyInBatch = batch.quantity;
        if (remainingQty >= qtyInBatch) {
          // This batch is fully sold
          remainingQty -= qtyInBatch;
          continue;
        } else {
          // Partially remaining batch
          let qtyLeft = qtyInBatch - remainingQty;
          totalInventoryCost += qtyLeft * batch.unit_price;
          currentQuantity += qtyLeft;
          remainingQty = 0;
        }
    }

    let average_cost = currentQuantity ? (totalInventoryCost / currentQuantity).toFixed(2) : 0;
     inventery_data.push({
        product_id,
        product_name,
        current_quantity: currentQuantity,
        total_inventory_cost: Number(totalInventoryCost.toFixed(2)),
        average_cost_per_unit: Number(average_cost)
      });
}

return inventery_data;
}
catch(err){
    throw err;
}
}

module.exports = inventery_model;