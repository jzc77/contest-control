import React from 'react'

function LinkRow({ buttonInfo }) {
  return (
    <div className='ReminderRowDiv'>
      <div className='LinkDiv'>
        {/* <a href='https://www.google.com'>https://www.google.commeqggewagewagewagewraegeagewewageewagewagewagewraegewagewagewraege</a> */}
        {/* <a href='https://www.google.com'>https://www.google.commeqggewagewagewageaegewagewagewraege</a> */}
        <a href='https://www.google.comm'>https://www.google.com</a>

        {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. */}
      </div>
      <div className='ButtonInfoDiv'>
        <p>{buttonInfo}</p>
      </div>
    </div>
  )
}

export default LinkRow