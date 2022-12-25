import React from 'react'
import ReminderHeading from './ReminderHeading'
import LinkRow from './LinkRow'
import TableOfLinks from './TableOfLinks'

function ReminderBottom({ link, listOfLinks, buttonInfo, listOfButtonInfo, isSubmitClicked, setIsSubmitClicked, finalArrayOfObjects }) {
  //console.log("this is listOfButtonInfo in RB.js: ", listOfButtonInfo);
  
  return (
    <>
      <div className='ReminderBottomSubDiv'>
        <TableOfLinks
          link={link}
          listOfLinks={listOfLinks}
          buttonInfo={buttonInfo}
          listOfButtonInfo={listOfButtonInfo}
          isSubmitClicked={isSubmitClicked}
          setIsSubmitClicked={setIsSubmitClicked}
          finalArrayOfObjects={finalArrayOfObjects}
        />
        {/* <ReminderHeading /> */}
        {/* <LinkRow buttonInfo={buttonInfo} /> */}
      </div>

    </>
  )
}

export default ReminderBottom