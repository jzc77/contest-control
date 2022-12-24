import React from 'react'
import ReminderHeading from './ReminderHeading'
import LinkRow from './LinkRow'
import TableOfLinks from './TableOfLinks'

function ReminderBottom({ buttonInfo }) {
  return (
    <>
      <div className='ReminderBottomSubDiv'>
        <TableOfLinks />
        {/* <ReminderHeading /> */}
        {/* <LinkRow buttonInfo={buttonInfo} /> */}
      </div>

    </>
  )
}

export default ReminderBottom