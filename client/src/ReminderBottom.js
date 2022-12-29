import React from 'react'
import ReminderHeading from './ReminderHeading'
import LinkRow from './LinkRow'
import TableOfLinks from './TableOfLinks'
import ReminderInfo from './ReminderInfo'

function ReminderBottom({ reminderInfoList, handleDelete, handleFilter, link, listOfLinks, buttonInfo, listOfButtonInfo, isSubmitClicked, setIsSubmitClicked, finalArrayOfObjects }) {
  //console.log("this is listOfButtonInfo in RB.js: ", listOfButtonInfo);
  console.log('this is reminderInfoList:');
  console.log(reminderInfoList);
  return (
    <>
      <div className='ReminderBottomSubDiv'>
        {/* <ReminderHeading /> */}
        <table>
          <thead>
            <tr className={"tableHeadElement"}>
              <th
              >
                List of links
              </th>
              <th
              >
                Remind me every
              </th>
            </tr>
          </thead>
        </table>
        {reminderInfoList.map(reminderInfo => {  // make each ReminderInfo a row in a table
          return (
            <div>
              <ReminderInfo reminderInfo={reminderInfo} handleDelete={handleDelete} handleFilter={handleFilter} />
              <table>
                <tbody>
                  <tr>
                    <td
                    >
                      {reminderInfo.link}
                    </td>
                    <td
                    >
                      {reminderInfo.buttonInfo}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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