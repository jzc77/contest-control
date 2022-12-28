import React from 'react'

function ReminderInfo({ reminderInfo, handleDelete }) {

  const handleClick = (e) => {
    e.preventDefault()
    handleDelete(e.currentTarget.id)
  }

  return (
    <div id={reminderInfo.id} key={reminderInfo.id + reminderInfo.link} name="reminderInfo" value={reminderInfo.id} onClick={handleClick} className={reminderInfo.delete ? "todo strike" : "todo"}>
      {reminderInfo.link}
    </div>
  )
}

export default ReminderInfo