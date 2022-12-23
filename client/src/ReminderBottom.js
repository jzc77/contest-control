import React from 'react'
import ReminderHeading from './ReminderHeading'
import LinkRow from './LinkRow'
import TestTable from './TestTable'

function ReminderBottom({ buttonInfo }) {
  return (
    <>
      <div className='ReminderBottomSubDiv'>
      <TestTable />
        {/* <ReminderHeading /> */}
        
        {/* <LinkRow buttonInfo={buttonInfo} />
        <LinkRow buttonInfo={"buttonInfo"} /> */}
        
      </div>

    </>
  )
}

export default ReminderBottom