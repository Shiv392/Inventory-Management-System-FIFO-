const sales_model = require('../models/sales_model');

const sales_controller = async(req, res)=>{
    try{
     const sales_data = await sales_model();
     return res.status(200).json({
        message : 'Sales data fetched succesfully',
        data : sales_data
     })
    }
    catch(err){
        console.log('sales controller error --->', err);
        return res.status(500).json({
            errro : 'Something went wrong'
        })
    }
}

module.exports = sales_controller;