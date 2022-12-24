import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReminderTop from './ReminderTop';
import ReminderBottom from './ReminderBottom';

function App() {
  const [link, setLink] = useState("")  // working
  const [buttonInfo, setButtonInfo] = useState("1 Day")
  const [reminderValueInDays, setReminderValueInDays] = useState(1)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)

  //const [reminderObject, setReminderObject] = useState({})
  //setReminderObject({ "link": link, "buttonInfo": buttonInfo, "reminderValueInDays": reminderValueInDays })
  //console.log("this is reminderObject from App.js");
  //console.log(reminderObject);

  //console.log("this is link from App.js: ", link);
  //console.log("this is buttonInfo from App.js: ", buttonInfo);
  //console.log("this is reminderValueInDays from App.js: ", reminderValueInDays);
  // TO DO: Handle "CUSTOM" selection
  console.log("this is isSubmitClicked from App.js: ", isSubmitClicked);

  // Create an array

  return (
    <>
      <ReminderTop
        link={link}
        setLink={setLink}
        buttonInfo={buttonInfo}
        setButtonInfo={setButtonInfo}
        setReminderValueInDays={setReminderValueInDays}
        isSubmitClicked={isSubmitClicked}
        setIsSubmitClicked={setIsSubmitClicked}
      />
      <ReminderBottom
        link={link}
        setLink={setLink}
        buttonInfo={buttonInfo}
        setButtonInfo={setButtonInfo}
        setReminderValueInDays={setReminderValueInDays}
        isSubmitClicked={isSubmitClicked}
        setIsSubmitClicked={setIsSubmitClicked}
      />
    </>
  )
};

export default App