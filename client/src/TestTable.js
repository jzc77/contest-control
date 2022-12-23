import React, { useMemo, useState, useEffect } from "react";
import { useTable } from 'react-table'

function TestTable() {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'some test of very very very very verylong text to see how it wraps around the table cell',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  )


  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  )


  //const tableInstance = useTable({ columns, data })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  console.log("this is getTableProps");
  console.log(getTableProps);

  return (
    <div className="tableDivMain">
      <table {...getTableProps()} className={"tableElement"} 
      // style={{ border: 'solid 1px blue' }}
      >
        <thead className={"tableHeadGroup"}>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className={"tableHeadElement"}
                  {...column.getHeaderProps()}
                  style={{
                    // borderBottom: 'solid 3px red',
                    // background: 'aliceblue',
                    // color: 'black',
                    // fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        // padding: '10px',
                        // border: 'solid 1px gray',
                        // background: 'papayawhip',
                        // width: "50%",
                        // overflow: "clip"
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TestTable

