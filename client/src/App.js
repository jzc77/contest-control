import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReminderTop from './ReminderTop';
import ReminderBottom from './ReminderBottom';

function App() {
  const [link, setLink] = useState("")  // working
  const [buttonInfo, setButtonInfo] = useState("1 Day")
  const [reminderValueInDays, setReminderValueInDays] = useState(1)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const [listOfLinks, setListOfLinks] = useState(["item1"])

  // TO DO: Handle "CUSTOM" selection

  // console.log("this is isSubmitClicked from App.js: ", isSubmitClicked);
  // console.log("this is link: ", link);
  // console.log("this is isSubmitClicked: ", isSubmitClicked); 
  useEffect(() => {
    if (isSubmitClicked === true) {
      setListOfLinks(currentListOfLinks => [...currentListOfLinks, link])
    }
  }, [isSubmitClicked === true])

  console.log("this is listOfLinks: ", listOfLinks);

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