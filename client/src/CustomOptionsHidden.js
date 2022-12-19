import React, { useEffect, useState } from 'react'
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function CustomOptionsHidden({ customButtonClicked }) {
  const optionUnits = {
    'Hour': 1 / 24,
    'Day': 1,
    'Week': 7,
    'Month': 30,
    'Year': 365,
  }
  const [buttonText, setButtonText] = useState("");
  const [menuItemColor, setMenuItemColor] = useState("white");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // const getCustomButtonTextContent = () => {
  //   // get menu item by content
  //   let specificMenuItem = document.currentTarget
  //   console.log("this is specificMenuItem");
  //   console.log(specificMenuItem);
  // }

  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
    setButtonText(event.target.textContent)

    //console.log("this is event");
    //console.log(event);
    functionToSetMenuItemColor(event);
    
    //let specificMenuItem = document.querySelectorAll(`[value="${event.target.attributes.value.textContent}"]`)
    //specificMenuItem[0].style.backgroundColor = "green"
  };

  const handleCloseMenu = (event) => {
    setAnchorEl(null);
    setButtonText(buttonText);

  };

  const functionToSetMenuItemColor = (event) => {
    let specificMenuItem = document.querySelectorAll(`[value="${event.target.attributes.value.textContent}"]`)
    //console.log("this is specificMenuItem");
    //console.log(specificMenuItem);
    specificMenuItem[0].style.backgroundColor = "rgba(121, 121, 121, 0.5)"
  }

  var customButtonTextContent = "";
  const handleCloseMenuItem = (event) => {
    //console.log(event);
    setAnchorEl(null);
    setButtonText(event.target.textContent);

    //console.log("this is event.target.textContent", event.target.textContent);
    //console.log("this is event.target.attributes.value.textContent", event.target.attributes.value.textContent);
    
    if (event.target.textContent == event.target.attributes.value.textContent) {
      //let specificMenuItem = document.querySelectorAll(`[value="${event.target.attributes.value.textContent}"]`)
      //console.log("this is specificMenuItem");
      //console.log(specificMenuItem);
      //specificMenuItem[0].style.backgroundColor = "green"
      //setMenuItemColor("green");

      functionToSetMenuItemColor(event);
    }

    
    // set background color of all menu item named "Months"
    //let specificMenuItem = document.getElementById(1)
    //specificMenuItem.style.backgroundColor = "green"
  };
  // useEffect((event) => {
  //   console.log("this is customButtonTextContent: ", customButtonTextContent);
  //   console.log("this is buttonText: ", buttonText);
  //   //getCustomButtonTextContent();
  // }, [buttonText]);



  return (
    <>
      {customButtonClicked &&
        <div className='CustomOptionsHiddenDiv'>
          <div className='CustomOptionsTextFieldDiv'>
            <TextField
              className='textfieldCustomOption'
              label="Enter a number"
            // onChange={(e) => {
            //   setName(e.target.value);
            // }} 
            />
          </div>
          <div className='CustomOptionsButtonDiv'>
            <button
              id="fade-button"
              className='buttonCustomUnits'
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {(buttonText) == "" ? "Days" : buttonText}
            </button>
          </div>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={(event) => handleCloseMenu(event)}
            TransitionComponent={Fade}
          >
            <div style={{width: "150px", float: 'right'}}>
            <MenuItem id={1} className="menuItemsDiv" value={"Days"} onClick={(event) => handleCloseMenuItem(event)}>Days</MenuItem>
            <MenuItem id={1} className="menuItemsDiv" value={"Months"} onClick={(event) => handleCloseMenuItem(event)}>Months</MenuItem>
            <MenuItem id={1} className="menuItemsDiv" value={"Years"} onClick={(event) => handleCloseMenuItem(event)}>Years</MenuItem>
            </div>
          </Menu>
        </div>
      }
    </>
  )
}

export default CustomOptionsHidden