import React from 'react'
import reactsvg from '../assets/react.svg'
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="logo">
            <a href="https://contactsushil.vercel.app/"><img src={reactsvg}></img></a>
        </div>
        <div className="menu">NightlightRounded</div>
    </div>
    </>
  )
}

export default Header