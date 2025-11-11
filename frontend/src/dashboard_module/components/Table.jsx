// src/components/Table.jsx
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { useState } from "react";

const Table = ({ columns = [], rows = [] }) => {
  const [page, setPage] = useState(0); // page index starts at 0
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // reset to first page
  };

  // Slice rows for current page
  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer component={Paper} elevation={3}>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.field} align={col.align || "left"}>
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((col) => (
                    <TableCell key={col.field} align={col.align || "left"}>
                      {row[col.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Table;
