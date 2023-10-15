import React from 'react'
import reactsvg from '../assets/react.svg'
import Night from '../assets/night.png'
import Day from "../assets/day.png"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {change} from "../feature/darkmode"

const Header = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const dispatch = useDispatch();
  const [curr, setcurr] =useState(currentMode); 
  
  const setMode = () => {
    const newMode = currentMode === 'Light' ? 'Dark' : 'Light';
    dispatch(change({ mode: newMode }));
    setcurr(newMode);
  };

  return (
    <>
    <div className="header" style={{
         backgroundColor: (curr === "Light") ? "white" : "#1B1F23"
      }}>
        <div className="logo">
            <a href="https://contactsushil.vercel.app/"><img className="logo-pp" src="https://media.licdn.com/dms/image/C4D03AQFj1UEp1hibQA/profile-displayphoto-shrink_100_100/0/1662981447177?e=1703116800&v=beta&t=Ujw7V62UVI8laxyP-UPToac0VL6LcK1cCU0UKBekxy4"></img></a>
            {console.log(currentMode)}
        </div>
        <div className="menu"><img className='dark-bright' src={(curr=="Light")?Night:Day} onClick={setMode} alt=""/></div>
    </div>
    </>
  )
}

export default Header
