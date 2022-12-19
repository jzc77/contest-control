import React, { useState } from 'react'
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    //console.log(event);
    setAnchorEl(event.currentTarget);
    setButtonText(event.target.textContent)
  };

  const handleCloseMenu = (event) => {
    setAnchorEl(null);
    setButtonText(buttonText);
  };

  const handleCloseMenuItem = (event) => {
    setAnchorEl(null);
    setButtonText(event.target.textContent);
  };

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
            <MenuItem onClick={(event) => handleCloseMenuItem(event)}>Profile</MenuItem>
            <MenuItem onClick={(event) => handleCloseMenuItem(event)}>My account</MenuItem>
            <MenuItem onClick={(event) => handleCloseMenuItem(event)}>Logout</MenuItem>
          </Menu>
        </div>
      }
    </>
  )
}

export default CustomOptionsHidden