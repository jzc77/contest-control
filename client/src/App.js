import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReminderTop from './ReminderTop';
import ReminderBottom from './ReminderBottom';

function App() {
  const [link, setLink] = useState("")  // working
  const [buttonInfo, setButtonInfo] = useState("1 Day")
  const [reminderValueInDays, setReminderValueInDays] = useState(1)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const [listOfLinks, setListOfLinks] = useState([])
  const [listOfButtonInfo, setListOfButtonInfo] = useState([])
  //const [finalArrayOfObjects, setFinalArrayOfObjects] = useState([])

  // TO DO: Handle "CUSTOM" selection

  // console.log("this is isSubmitClicked from App.js: ", isSubmitClicked);
  // console.log("this is link: ", link);
  //console.log("this is buttonInfo: ", buttonInfo); 
  
  useEffect(() => {
    if (isSubmitClicked === true && link != "") {
      setListOfLinks(currentListOfLinks => [...currentListOfLinks, link])
      setListOfButtonInfo(currentListOfButtonInfo => [...currentListOfButtonInfo, buttonInfo])
    }
  }, [isSubmitClicked === true])

  //const finalArrayOfObjects = []  // e.g. [{col1: "test1", col2: "test2"}, {col1: "test3", col2: "test4"}]
  // var key1 = "col1"
  // var key2 = "col2"
  // var tempObj = {}
  // for (var i = 0; i < listOfLinks.length; i++) {
  //   //var tempObj = {}
  //   tempObj[key1] = listOfLinks[i]
  //   tempObj[key2] = listOfButtonInfo[i]
  //   //finalArrayOfObjects.push(tempObj) 
  // }

  //console.log("this is tempObj: ", tempObj);
  //setFinalArrayOfObjects(currentTempObj => [...currentTempObj, tempObj])
  //console.log("this is finalArrayOfObjects in App.js: ", finalArrayOfObjects);

  //const testArray = [{col1: "test1", col2: "test2"}, {col1: "test3", col2: "test4"}]  // works
  //setFinalArrayOfObjects(testArray)
  //console.log("this is listOfButtonInfo in App.js: ", listOfButtonInfo);
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
        listOfLinks={listOfLinks}
        listOfButtonInfo={listOfButtonInfo}
      />
    </>
  )
};

export default App