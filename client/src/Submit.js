import React from 'react'

function Submit({ link, isSubmitClicked, setIsSubmitClicked }) {

  const submitButton = document.querySelector(".submit-button");
  document.addEventListener("mousedown", (e) => {
    //console.log("this is e.target:");
    //console.log(e.target);
    if (submitButton.contains(e.target)) {
      //console.log("clicked inside");
      setIsSubmitClicked(true)
    } else {
      //console.log("clicked outside");
      setIsSubmitClicked(false)
    }
  });
  
  // const handleClick = () => {
  //   if (link !== "") {
  //     setIsSubmitClicked(true)
  //   } else {
  //     alert("Please enter a link")
  //   }
  // }

  return (
    <button
      type="button"
      className="submit-button"
      //onClick={() => handleClick()}
    >SUBMIT
    </button>
  )
}

export default Submit