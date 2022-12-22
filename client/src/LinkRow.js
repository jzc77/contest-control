import React from 'react'

function LinkRow({ buttonInfo }) {
  return (
    <div className='ReminderRowDiv'>
      <div>
        <a href='https://www.google.com'>https://www.google.com</a>
      </div>
      <div>
        <p>{buttonInfo}</p>
      </div>
    </div>
  )
}

export default LinkRow