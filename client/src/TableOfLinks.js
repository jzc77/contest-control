import React, { useMemo, useState, useEffect } from "react";
import { useTable } from 'react-table'

function TableOfLinks({ link, buttonInfo, isSubmitClicked, setIsSubmitClicked }) {
  const data1 = useMemo(
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


  const columns1 = useMemo(
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

  const data2 = useMemo(
    () => [
      {
        col1: link,
        col2: 'World2',
      },
      {
        col1: 'some2 test of very very very very very long text to see how it wraps around the table cell',
        col2: 'rocks2',
      },
      {
        col1: 'whatever2',
        col2: 'you want2',
      },
    ],
    []
  )


  const columns2 = useMemo(
    () => [
      {
        Header: 'Links2',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Remind me every2',
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
  } = useTable( isSubmitClicked == true ? { columns: columns1, data: data1 } : { columns: columns2, data: data2 } )
    
    //{ columns: columns1, data: data1 })

  //isSubmitClicked == true && 

  //console.log("this is getTableProps");
  //console.log(getTableProps);
  //console.log("this is isSubmitClicked: ", isSubmitClicked);
  //isSubmitClicked == false;


  //if (isSubmitClicked == true) {
    return ( // new values
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

  // } else {
  //   return ( // old values
  //     //<p>submit is not clicked</p>
  //     <div className="tableDivMain">
  //     <table {...getTableProps() && isSubmitClicked == true} className={"tableElement"}
  //     // style={{ border: 'solid 1px blue' }}
  //     >
  //       <thead className={"tableHeadGroup"}>
  //         {headerGroups.map(headerGroup => (
  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map(column => (
  //               <th className={"tableHeadElement"}
  //                 {...column.getHeaderProps()}
  //                 style={{
  //                   // borderBottom: 'solid 3px red',
  //                   // background: 'aliceblue',
  //                   // color: 'black',
  //                   // fontWeight: 'bold',
  //                 }}
  //               >
  //                 {column.render('Header')}
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {rows.map(row => {
  //           prepareRow(row)
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map(cell => {
  //                 return (
  //                   <td
  //                     {...cell.getCellProps()}
  //                     style={{
  //                       // padding: '10px',
  //                       // border: 'solid 1px gray',
  //                       // background: 'papayawhip',
  //                       // width: "50%",
  //                       // overflow: "clip"
  //                     }}
  //                   >
  //                     {cell.render('Cell')}
  //                   </td>
  //                 )
  //               })}
  //             </tr>
  //           )
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  //   )
  //}


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