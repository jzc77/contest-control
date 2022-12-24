import React from 'react'
import ReminderHeading from './ReminderHeading'
import LinkRow from './LinkRow'
import TableOfLinks from './TableOfLinks'

function ReminderBottom({ link, buttonInfo, isSubmitClicked, setIsSubmitClicked }) {
  return (
    <>
      <div className='ReminderBottomSubDiv'>
        <TableOfLinks link={link} buttonInfo={buttonInfo} isSubmitClicked={isSubmitClicked} setIsSubmitClicked={setIsSubmitClicked} />
        {/* <ReminderHeading /> */}
        {/* <LinkRow buttonInfo={buttonInfo} /> */}
      </div>

    </>
  )
}

export default ReminderBottom