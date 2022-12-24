import React, { useMemo, useState, useEffect } from "react";
import { useTable } from 'react-table'

function TableOfLinks({ link, buttonInfo, isSubmitClicked, setIsSubmitClicked }) {
  const data = useMemo(
    () => [
      {
        col1: link,
        col2: 'World',
      },
      {
        col1: 'some test of very very very very very long text to see how it wraps around the table cell',
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
        Header: 'Links',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Remind me every',
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

  //isSubmitClicked == true && 

  //console.log("this is getTableProps");
  //console.log(getTableProps);
  //console.log("this is isSubmitClicked: ", isSubmitClicked);
  //isSubmitClicked == false;


  if (isSubmitClicked == true) {
    return (
      // <p>submit is clicked</p>
      <div className="tableDivMain">
        <table {...getTableProps() && isSubmitClicked == true} className={"tableElement"}
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

  } else {
    return (
      <p>submit is not clicked</p>
    )
  }


}

export default TableOfLinks

// SN: Original
// const data = useMemo(
//   () => [
//     {
//       col1: 'Hello',
//       col2: 'World',
//     },
//     {
//       col1: 'some test of very very very very very long text to see how it wraps around the table cell',
//       col2: 'rocks',
//     },
//     {
//       col1: 'whatever',
//       col2: 'you want',
//     },
//   ],
//   []
// )


// const columns = useMemo(
//   () => [
//     {
//       Header: 'Links',
//       accessor: 'col1', // accessor is the "key" in the data
//     },
//     {
//       Header: 'Remind me every',
//       accessor: 'col2',
//     },
//   ],
//   []
// )