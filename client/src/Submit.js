import React from 'react'

function Submit({ link, setIsSubmitClicked }) {

  const handleClick = () => {
    if (link !== "") {
      setIsSubmitClicked(true)
    } else {
      alert("Please enter a link")
    }
  }

  return (
    <button
      type="button"
      className="submit-button"
      onClick={() => handleClick()}
    >SUBMIT
    </button>
  )
}

export default Submit