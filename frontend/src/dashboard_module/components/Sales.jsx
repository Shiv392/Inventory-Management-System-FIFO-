import useSales from "../hooks/useSales";
import Table from "./Table";

const Sales = () => {
    const { sales, loading, error } = useSales();
    if (loading) return <h3>Loading ...</h3>
    if (error) return <p style={{ color: "red" }}>Error: {error.message || error}</p>;

  const columns = [
    { field: "product_name", headerName: "Product" },
    { field: "quantity", headerName: "Quantity", align: "right" },
    { field: "cost", headerName: "Cost", align: "right" },
    { field: "timestamp", headerName: "Date/Time" },
  ];
    return (
            <>
    <h1>Sales Table</h1>
    <Table columns={columns} rows={sales} />;
    </>
    )
}

export default Sales;