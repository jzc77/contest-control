import React from 'react'
import ReminderHeading from './ReminderHeading'
import LinkRow from './LinkRow'

function ReminderBottom({ buttonInfo }) {
  return (
    <>
      <div className='ReminderBottomSubDiv'>
        <ReminderHeading />
        <LinkRow buttonInfo={buttonInfo} />
      </div>

    </>
  )
}

export default ReminderBottom