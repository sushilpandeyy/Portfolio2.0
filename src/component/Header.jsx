import React from 'react'
import reactsvg from '../assets/react.svg'
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="logo">
            <img src={reactsvg}></img>
        </div>
        <div className="menu">NightlightRounded</div>
    </div>
    </>
  )
}

export default Header