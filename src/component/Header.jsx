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

  const isDark = curr !== 'Light';

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-colors duration-300
        ${isDark 
          ? 'bg-gray-900 border-b border-gray-800' 
          : 'bg-white border-b border-gray-100'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a 
              href="https://contactsushil.vercel.app/"
              className="block transition-transform duration-300 hover:scale-105"
            >
              <img
                className="w-10 h-10 rounded-full shadow-md ring-2 ring-offset-2
                  ${isDark ? 'ring-gray-700' : 'ring-gray-200'}"
                src="https://blog.contactsushil.me/static/images/sushil.png"
                alt="Sushil Pandey"
              />
            </a>
          </div>

          {/* Mode Toggle Section */}
          <div className="flex items-center">
            <button
              onClick={setMode}
              className={`p-2 rounded-full transition-all duration-300
                ${isDark 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
                }`}
              aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            >
              <img
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                src={isDark ? Day : Night}
                alt={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;