import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReminderTop from './ReminderTop';
import ReminderBottom from './ReminderBottom';
import data from './data';

function App() {
  // const [link, setLink] = useState("")  // working
  // const [buttonInfo, setButtonInfo] = useState("1 Day")
  // const [reminderValueInDays, setReminderValueInDays] = useState(1)
  // const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  // const [listOfLinks, setListOfLinks] = useState([])
  // const [listOfButtonInfo, setListOfButtonInfo] = useState([])
  const [reminderInfoList, setReminderList] = useState([])
  console.log('this is reminderInfoList:');
  console.log(reminderInfoList);
  // useEffect(() => {
  //   if (isSubmitClicked === true && link != "") {
  //     setListOfLinks(currentListOfLinks => [...currentListOfLinks, link])
  //     setListOfButtonInfo(currentListOfButtonInfo => [...currentListOfButtonInfo, buttonInfo])
  //   }
  // }, [isSubmitClicked === true])

  const addReminderInfo = (userLinkInput, buttonInfo, reminderValueInDays) => {
    let copy = [...reminderInfoList];
    copy = [...copy, { id: reminderInfoList.length + 1, link: userLinkInput, buttonInfo: buttonInfo, reminderValueInDays: reminderValueInDays, delete: false }];  // need to add buttonInfo, add reminderValueInDays, add reminderMethod (Discord vs email)
    setReminderList(copy);
  }

  const handleDelete = (id) => {
    let mapped = reminderInfoList.map((link) => {
      console.log("this is link.id:", link.id);
      return link.id === Number(id)
        ? { ...link, delete: !link.delete }
        : { ...link };
    });
    setReminderList(mapped);
  };

  const handleFilter = () => {
    let filtered = reminderInfoList.filter((link) => {
      return !link.delete;
    });
    setReminderList(filtered);
  };

  return (
    <>
      <ReminderTop
        addReminderInfo={addReminderInfo}
      // link={link}
      // setLink={setLink}
      // buttonInfo={buttonInfo}
      // setButtonInfo={setButtonInfo}
      // setReminderValueInDays={setReminderValueInDays}
      // isSubmitClicked={isSubmitClicked}
      // setIsSubmitClicked={setIsSubmitClicked}
      />
      <ReminderBottom
        reminderInfoList={reminderInfoList}
        handleDelete={handleDelete}
        handleFilter={handleFilter}
      // link={link}
      // setLink={setLink}
      // buttonInfo={buttonInfo}
      // setButtonInfo={setButtonInfo}
      // setReminderValueInDays={setReminderValueInDays}
      // isSubmitClicked={isSubmitClicked}
      // setIsSubmitClicked={setIsSubmitClicked}
      // listOfLinks={listOfLinks}
      // listOfButtonInfo={listOfButtonInfo}
      />
    </>
  )
};

export default App