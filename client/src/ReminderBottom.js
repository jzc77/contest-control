import React from 'react'
import ReminderHeading from './ReminderHeading'
import LinkRow from './LinkRow'
import TableOfLinks from './TableOfLinks'
import ReminderInfo from './ReminderInfo'

function ReminderBottom({ reminderInfoList, handleDelete, handleFilter, link, listOfLinks, buttonInfo, listOfButtonInfo, isSubmitClicked, setIsSubmitClicked, finalArrayOfObjects }) {
  //console.log("this is listOfButtonInfo in RB.js: ", listOfButtonInfo);

  return (
    <>
      <div>
        {reminderInfoList.map(reminderInfo => {
          return (
            <ReminderInfo reminderInfo={reminderInfo} handleDelete={handleDelete} handleFilter={handleFilter} />
          )
        })}
        <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
      </div>
      {/* <div className='ReminderBottomSubDiv'>
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
      {/* </div> */}

    </>
  )
}

export default ReminderBottom