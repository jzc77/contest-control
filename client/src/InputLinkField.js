import React from 'react'
import { TextField } from "@mui/material";
import './styles/styles.scss';

function InputLinkField({ setLink }) {
  return (
    <TextField
      className='textfieldMainLink'
      label="Paste a link"
      onChange={(e) => {
        setLink(e.target.value);
      }}
    />
  )
}

export default InputLinkField
