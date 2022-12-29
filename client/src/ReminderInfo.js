import React from 'react'
import TableOfInfo from './TableOfInfo'

function ReminderInfo({ reminderInfo, handleDelete }) {

  const handleClick = (e) => {
    e.preventDefault()
    handleDelete(e.currentTarget.id)
  }

  var finalArrayOfObjects2 = []  // e.g. [{col1: "test1", col2: "test2"}, {col1: "test3", col2: "test4"}]
  var tempObj = {}
  tempObj["col1"] = reminderInfo.link
  tempObj["col2"] = reminderInfo.buttonInfo
  finalArrayOfObjects2.push(tempObj)

  //console.log("this is finalArrayOfObjects2[0]:");
  //console.log(finalArrayOfObjects2[0]);

  return (
    <div id={reminderInfo.id} key={reminderInfo.id + reminderInfo.link} name="reminderInfo" value={reminderInfo.id} onClick={handleClick} className={reminderInfo.delete ? "todo strike" : "todo"}>
      {/* {reminderInfo.link}
      {reminderInfo.buttonInfo}
      {reminderInfo.reminderValueInDays} */}

      {/* <TableOfInfo reminderInfo={reminderInfo} /> */}
    </div>
  )
}

export default ReminderInfo