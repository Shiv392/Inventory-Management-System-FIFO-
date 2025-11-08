const inventery_model = require('../models/inventery_model');

const inventory_controller = async(req, res)=>{
    try{
    const inventory_data = await inventery_model();
    return res.status(200).json({
        message : 'Data fetched succesfully',
        data : inventory_data
    })
    }
    catch(err){
        console.log('inventory_controller erro--->', err);
        return res.status(500).json({
            error : 'Internal server error'
        })
    }
}

module.exports = inventory_controller;