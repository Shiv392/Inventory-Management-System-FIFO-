import api from "../../config/axios_config";

const get_inventory_data = async()=>{
    const response = await api.get('/inventory');
     console.log("API Response:", response.data)
    return response.data?.data || []
}

export default get_inventory_data;