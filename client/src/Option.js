import React, { useEffect, useState } from 'react'
import CustomOptionsHidden from "./CustomOptionsHidden";
import './styles/styles.scss';

function Option({ buttonInfo, setButtonInfo, setReminderValueInDays }) {
  const [customButtonClicked, setCustomButtonClicked] = useState(false)
  const handleClick = (reminderValue, event) => {
    setReminderValueInDays(reminderValue)  // e.g. 90

    const setButtonColour = () => {
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

    // Check if custom button was clicked
    if (event.target.id === "custom") {
      setCustomButtonClicked(true)
      setButtonColour()
    } else {
      setCustomButtonClicked(false)
      setButtonColour()
    }

  }

  // Set the default background color of the first button ("1 Day") to active
  useEffect(() => {
    let specificButton = document.getElementById("1 Day")
    specificButton.style.backgroundColor = "#23c483"
  }, [])

  return (
    <div>
      {/* map through the buttonValues object */}

      {Object.entries(buttonInfo).map((reminderInfo) => {
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
      <CustomOptionsHidden customButtonClicked={customButtonClicked} />
    </div>
  )
}

export default Option