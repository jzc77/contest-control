import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReminderTop from './ReminderTop';
import ReminderBottom from './ReminderBottom';

function App() {
  const [link, setLink] = useState("")  // working
  const [buttonInfo, setButtonInfo] = useState("")
  const [reminderValueInDays, setReminderValueInDays] = useState(1)

  //const [reminderObject, setReminderObject] = useState({})
  //setReminderObject({ "link": link, "buttonInfo": buttonInfo, "reminderValueInDays": reminderValueInDays })
  //console.log("this is reminderObject from App.js");
  //console.log(reminderObject);

  console.log("this is buttonInfo from App.js: ", buttonInfo);
  console.log("this is reminderValueInDays from App.js: ", reminderValueInDays);

  return (
    <>
      <ReminderTop setLink={setLink} setButtonInfo={setButtonInfo} setReminderValueInDays={setReminderValueInDays} />
      <ReminderBottom setLink={setLink} setButtonInfo={setButtonInfo} setReminderValueInDays={setReminderValueInDays} />
    </>
  )
};

export default App