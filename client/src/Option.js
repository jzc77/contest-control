import React, { useState } from 'react'
import './styles/styles.scss';

function Option({ buttonInfo }) {
  const [reminderDate, setReminderDate] = useState(null)
  console.log("this is reminderDate");
  console.log(reminderDate);
  // const setDate = (e) => {
  //   console.log(e.target.value)
  //   //setReminderDate = e.target.value
  // }

  const handleClick = (reminderValue, event) => {
    setReminderDate(reminderValue)

    console.log("this is event.target.id");
    console.log(event.target.id);

    // setting the background color of all buttons
    for (let key in buttonInfo) {
      key = key; // e.g. "1 day"
      let value = buttonInfo[key];  // e.g. 1

      // set the background color of all buttons to the default color
      let specificButton = document.getElementById(key)
      specificButton.style.backgroundColor = "rgb(119, 197, 182)"

      // set the background color of the button that was clicked to the active color
      if (event.target.id == key) {
        let specificButton = document.getElementById(event.target.id)
        specificButton.style.backgroundColor = "#23c483"
      }
    }
  }

  return (

    <div>
      {/* map through the buttonValues object */}
      {Object.entries(buttonInfo).map((reminderInfo) => {
        //console.log(reminderInfo);
        return (
          <button
            type="button"
            className="option-button"
            id={reminderInfo[0]}
            key={reminderInfo[0]}
            value={reminderInfo[1]}
            onClick={(event) => { handleClick(reminderInfo[1], event) }}>{reminderInfo[0]}
          </button>
        )
      })}

      {/* {Object.entries(buttonInfo).map((reminderKey, reminderValue) => {
        console.log(reminderKey, reminderValue);
        return <button type="button" className="option-button" value={reminderValue && reminderValue != 'null'} onClick={setReminderDate}>{reminderKey}</button>
      })} */}
    </div>
  )
}

export default Option