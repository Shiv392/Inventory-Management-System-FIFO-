import { useEffect, useState } from "react";
import get_sales_data from "../services/sales_service";

const useSales = ()=>{
    const [sales, set_sales] = useState([]);
    const [loading, set_loading] = useState(true);
    const [error, set_error] = useState(null);

    useEffect(()=>{
    const fetch_data = async()=>{
        try{
        const inventory_data = await get_sales_data();

        set_sales([...inventory_data]);
        }
        catch(err){
            set_loading(false);
            set_error(err);
        }
        finally{
            set_loading(false);
        }
    }
    fetch_data();
    },[]);

    return {sales, loading, error};
}

export default useSales;