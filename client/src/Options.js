import React from 'react'
import Option from './Option'

function Options({ setButtonInfo, setReminderValueInDays }) {
  const buttonInfo = {
    '1 Day': 1,
    '3 Days': 3,
    '1 Week': 7,
    '2 Weeks': 14,
    '1 Month': 30,
    '3 Months': 90,
    '6 Months': 180,
    '1 Year': 365,
    'custom': 'null'
  }

  return (
    <div><Option buttonInfo={buttonInfo} setButtonInfo={setButtonInfo} setReminderValueInDays={setReminderValueInDays} /></div>
  )
}

export default Options