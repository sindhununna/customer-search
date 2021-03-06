import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import "./table.css";
import { Link } from "react-router-dom";
// import { ColumnFilter } from './ColumnFilter'

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: GlobalFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    { defaultColumn, columns, data, initialState: { pageIndex: 0 } },

    useGlobalFilter,
    usePagination
  );
  const linkStyle={
    textDecoration:"none",
    color:"deepskyblue",
   hover :{
      textDecoration:"underline",
      color:"red"
    }
  }

  const { globalFilter, pageIndex, pageSize } = state;
  console.log(page.length);
 
  return (
    <>
      <h1>Search Customer</h1>
      <br />
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <h3>
        <b>Records retrieved: {page.length}</b>
      </h3>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                   console.log(cell.row.original.name)
                  // console.log(cell);

                  return (cell.column.Header === "Name" ? (<td {...cell.getCellProps()}>
                    <Link style={linkStyle}key={cell.row.id} to={`/components/BasicTable/${cell.row.original.name}`}>{cell.render("Cell")}</Link> </td>) 
                    : (<td {...cell.getCellProps()}>{cell.render("Cell")}</td>));
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagestyle">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 13, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
