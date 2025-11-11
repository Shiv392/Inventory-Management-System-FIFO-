import useInventory from "../hooks/useInventory";
import Table from "./Table";

const Inventory = () => {
  const { inventory, loading, error } = useInventory();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message || error}</p>;

  const columns = [
    { field: "product_name", headerName: "Product" },
    { field: "current_quantity", headerName: "Quantity", align: "right" },
    { field: "total_inventory_cost", headerName: "Total Cost", align: "right" },
    { field: "average_cost_per_unit", headerName: "Avg Cost/Unit", align: "right" },
  ];

  return (
    <>
    <h1>Inventory Table</h1>
    <Table columns={columns} rows={inventory} />;
    </>
  )
};

export default Inventory;