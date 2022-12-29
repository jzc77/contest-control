// import React, { useMemo, useState, useEffect } from "react";
// import { useTable } from 'react-table'

// function TableOfLinks({ listOfLinks, listOfButtonInfo, isSubmitClicked }) {
//   var [finalArrayOfObjects, setFinalArrayOfObjects] = useState([])

//   const finalArrayOfObjects2 = []  // e.g. [{col1: "test1", col2: "test2"}, {col1: "test3", col2: "test4"}]
//   for (var i = 0; i < listOfLinks.length; i++) {
//     var tempObj = {}
//     tempObj["col1"] = listOfLinks[i]
//     tempObj["col2"] = listOfButtonInfo[i]
//     finalArrayOfObjects2.push(tempObj)
//   }

//   useEffect(() => {
//     setFinalArrayOfObjects(finalArrayOfObjects2)
//   }, [finalArrayOfObjects2 && isSubmitClicked == true])
//   console.log("this is finalArrayOfObjects2: ", finalArrayOfObjects2);
//   finalArrayOfObjects = finalArrayOfObjects2
//   console.log("this is finalArrayOfObjects: ", finalArrayOfObjects);

//   const data1 = useMemo(
//     () => finalArrayOfObjects,
//     []
//   )
 
//   const columns1 = useMemo(
//     () => [
//       {
//         Header: 'Links',
//         accessor: 'col1', // accessor is the "key" in the data
//       },
//       {
//         Header: 'Remind me every',
//         accessor: 'col2',
//       },
//     ],
//     []
//   )

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable(isSubmitClicked == true ? { columns: columns1, data: data1 } : { columns: columns1, data: data1 })

//   return ( // new values
//     <div className="tableDivMain">
//       <table {...getTableProps() && isSubmitClicked == true} className={"tableElement"}
//       // style={{ border: 'solid 1px blue' }}
//       >
//         <thead className={"tableHeadGroup"}>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th className={"tableHeadElement"}
//                   {...column.getHeaderProps()}
//                   style={{
//                     // borderBottom: 'solid 3px red',
//                     // background: 'aliceblue',
//                     // color: 'black',
//                     // fontWeight: 'bold',
//                   }}
//                 >
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map(row => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return (
//                     <td
//                       {...cell.getCellProps()}
//                       style={{
//                         // padding: '10px',
//                         // border: 'solid 1px gray',
//                         // background: 'papayawhip',
//                         // width: "50%",
//                         // overflow: "clip"
//                       }}
//                     >
//                       {cell.render('Cell')}
//                     </td>
//                   )
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )

// }

// export default TableOfLinks

// // SN: Original
// // const data = useMemo(
// //   () => [
// //     {
// //       col1: 'Hello',
// //       col2: 'World',
// //     },
// //     {
// //       col1: 'some test of very very very very very long text to see how it wraps around the table cell',
// //       col2: 'rocks',
// //     },
// //     {
// //       col1: 'whatever',
// //       col2: 'you want',
// //     },
// //   ],
// //   []
// // )


// // const columns = useMemo(
// //   () => [
// //     {
// //       Header: 'Links',
// //       accessor: 'col1', // accessor is the "key" in the data
// //     },
// //     {
// //       Header: 'Remind me every',
// //       accessor: 'col2',
// //     },
// //   ],
// //   []
// // )