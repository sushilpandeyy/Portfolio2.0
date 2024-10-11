import React from 'react';
import Night from '../assets/night.png';
import Day from "../assets/day.png";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { change } from "../feature/darkmode";

const Header = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const dispatch = useDispatch();
  const [curr, setcurr] = useState(currentMode);

  const setMode = () => {
    const newMode = currentMode === 'Light' ? 'Dark' : 'Light';
    dispatch(change({ mode: newMode }));
    setcurr(newMode);
  };

  return (
    <div
      className={`flex justify-between items-center p-4 ${curr === 'Light' ? 'bg-white' : 'bg-gray-900 border-b border-gray-700'}`}
    >
      {/* Logo Section */}
      <div className="logo">
        <a href="https://contactsushil.vercel.app/">
          <img
            className="logo-pp w-[50px] h-[50px] rounded-full"
            src="https://ihhplayer.s3.ap-south-1.amazonaws.com/Posters/PROFILE.jpeg"
            alt="Profile"
          />
        </a>
        {console.log(currentMode)}
      </div>

      {/* Mode Toggle Section */}
      <div className="menu">
        <img
          className="dark-bright w-[35px] cursor-pointer transition-transform duration-300 transform hover:scale-110"
          src={curr === 'Light' ? Night : Day}
          onClick={setMode}
          alt="Toggle Mode"
        />
      </div>
    </div>
  );
};

export default Header;
