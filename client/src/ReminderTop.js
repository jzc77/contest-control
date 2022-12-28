import React, { useState } from 'react';
import InputLinkField from "./InputLinkField";
import Options from "./Options";
// import CustomOptionsHidden from "./CustomOptionsHidden";
import Submit from "./Submit";
import './styles/styles.scss';
import { TextField } from "@mui/material";

function ReminderTop({ addReminderInfo, link, setLink, isSubmitClicked, setIsSubmitClicked }) {
  const [userInput, setUserInput] = useState(''); // SN: only handles link submission
  const [buttonInfo, setButtonInfo] = useState("1 Day")
  const [reminderValueInDays, setReminderValueInDays] = useState(1)
  const [reminderMethod, setReminderMethod] = useState("Discord")

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminderInfo(userInput, buttonInfo, reminderValueInDays);
    setUserInput("");
  }

  console.log("this is buttonInfo: ", buttonInfo);
  console.log("this is reminderValueInDays: ", reminderValueInDays);
  return (
    <>
      <h1 className="siteTitle">Contest Control</h1>
      <form onSubmit={handleSubmit} className="ReminderTopSubDiv" >
        <p>Remind me of this link:</p>
        <TextField className='textfieldMainLink' value={userInput} type="text" onChange={handleChange} placeholder="Paste a link" />
        <p>Remind me every:</p>
        <Options setButtonInfo={setButtonInfo} setReminderValueInDays={setReminderValueInDays} />
        <button className='submit-button'>Submit</button>
      </form>
      {/* <h1 className="siteTitle">Contest Control</h1>
      <div className="ReminderTopSubDiv">
        <p>Remind me of this link:</p>
        <InputLinkField setLink={setLink} />
        <p>Remind me every:</p>
        <Options setButtonInfo={setButtonInfo} setReminderValueInDays={setReminderValueInDays} />
        <Submit link={link} isSubmitClicked={isSubmitClicked} setIsSubmitClicked={setIsSubmitClicked} />
      </div> */}
    </>
  );
}

export default ReminderTop;
