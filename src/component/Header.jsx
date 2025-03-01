import React, { useEffect } from 'react';
import Night from '../assets/night.png';
import Day from "../assets/day.png";
import { useDispatch, useSelector } from 'react-redux';
import { change } from "../feature/darkmode";
import { Link } from 'react-router-dom';

const Header = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const dispatch = useDispatch();
  const isDark = currentMode === 'Dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const setMode = () => {
    const newMode = isDark ? 'Light' : 'Dark';
    dispatch(change({ mode: newMode }));
  };

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
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className="block transition-transform duration-300 hover:scale-105"
            >
              <img
                className={`w-10 h-10 rounded-full shadow-md ring-2 ring-offset-2
                  ${isDark ? 'ring-gray-700' : 'ring-gray-200'}`}
                src="https://blog.contactsushil.me/static/images/sushil.png"
                alt="Sushil Pandey"
              />
            </Link>
          </div>

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