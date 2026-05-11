import React from 'react'


const MyButton = (isHidden) => {
  return (
    <button className="{isHidden ? 'hidden': ''}">{isHidden}</button>
  )
}

export default MyButton;
