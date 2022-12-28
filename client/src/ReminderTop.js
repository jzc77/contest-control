import React, { useState } from 'react';
import InputLinkField from "./InputLinkField";
import Options from "./Options";
// import CustomOptionsHidden from "./CustomOptionsHidden";
import Submit from "./Submit";
import './styles/styles.scss';

function ReminderTop({ addReminderInfo, link, setLink, setButtonInfo, setReminderValueInDays, isSubmitClicked, setIsSubmitClicked }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminderInfo(userInput);
    setUserInput("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Paste a link" />
        <button>Submit</button>
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
