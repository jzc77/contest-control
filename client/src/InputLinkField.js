import React from 'react'
import { TextField } from "@mui/material";
import './styles/styles.scss';

function InputLinkField() {
  return (
    <TextField
      className='textfield'
      label="Paste a link"
    // onChange={(e) => {
    //   setName(e.target.value);
    // }} 
    />
  )
}

export default InputLinkField