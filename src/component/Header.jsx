import React from 'react'
import reactsvg from '../assets/react.svg'
import Night from '../assets/night.png'
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="logo">
            <a href="https://contactsushil.vercel.app/"><img src={reactsvg}></img></a>
        </div>
        <div className="menu"><img className='dark-bright' src={Night} alt=""/></div>
    </div>
    </>
  )
}

export default Header