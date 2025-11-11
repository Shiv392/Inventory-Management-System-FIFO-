import api from "../../config/axios_config";

const get_sales_data = async()=>{
    const response = await api.get('/sales');
     console.log("API Response:", response.data)
    return response.data?.data || []
}

export default get_sales_data;