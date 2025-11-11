import { useEffect, useState } from "react";
import get_inventory_data from "../services/inventory_service";

const useInventory = ()=>{
    const [inventory, set_inventory] = useState([]);
    const [loading, set_loading] = useState(true);
    const [error, set_error] = useState(null);

    useEffect(()=>{
    const fetch_data = async()=>{
        try{
        const inventory_data = await get_inventory_data();
        console.log('inventory data--->', inventory_data);

        set_inventory([...inventory_data]);
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

    return {inventory, loading, error};
}

export default useInventory;