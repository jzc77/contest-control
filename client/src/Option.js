import React from 'react'
import { Button } from "@mui/material";
import './styles/styles.scss';

function Option({ buttonInfo }) {
  const [reminderDate, setReminderDate] = React.useState(null)
  console.log("this is reminderDate");
  console.log(reminderDate);
  // const setDate = (e) => {
  //   console.log(e.target.value)
  //   //setReminderDate = e.target.value
  // }


  return (

    <div>
      {/* map through the buttonValues object */}
      {Object.entries(buttonInfo).map((reminderInfo) => {
        //console.log(reminderInfo);
        return <button type="button" className="option-button" key={reminderInfo[0]} value={reminderInfo[1]} onClick={() => setReminderDate(reminderInfo[1])}>{reminderInfo[0]}</button>
      })}

      {/* {Object.entries(buttonInfo).map((reminderKey, reminderValue) => {
        console.log(reminderKey, reminderValue);
        return <button type="button" className="option-button" value={reminderValue && reminderValue != 'null'} onClick={setReminderDate}>{reminderKey}</button>
      })} */}
    </div>
  )
}

export default Option