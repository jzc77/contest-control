import React from 'react'
import { TextField } from "@mui/material";
import './styles/styles.scss';

function InputLinkField({ setReminderObject }) {
  return (
    <TextField
      className='textfieldMainLink'
      label="Paste a link"
      onChange={(e) => {
        setReminderObject( { "link": e.target.value});
      }}
    />
  )
}

export default InputLinkField
