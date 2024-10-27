import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import assests from '../assets/all';
import { useSelector } from 'react-redux';

const Bio = () => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div 
      className={`pb-5 rounded-lg border ${currentMode === 'Light' ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'} animate-fadeIn`}
    >
      <div className="headimage h-[150px] sm:h-[281px]">
        <img className="w-full h-full object-cover rounded-lg" src={assests.headergif} alt="Header" />
      </div>

      <div className="relative profilepic transition-transform duration-500 ease-in-out hover:scale-105">
        <img
          className="absolute top-[-70px] sm:top-[-140px] left-[10px] sm:left-[26px] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] rounded-full object-cover border-4 border-white"
          src={assests.profile}
          alt="Profile"
        />
      </div>

      <div className="space h-[20px] sm:h-[50px]"></div>

      <div className="biodetails flex flex-col sm:flex-row">
        <div className="bioname w-full sm:w-[70%] m-2 sm:m-5">
          <h1 className={`text-xl sm:text-3xl font-bold transition-all duration-300 ease-in-out ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
            Sushil Pandey
          </h1>
          <p className={`mt-1 sm:mt-2 text-sm sm:text-base transition-all duration-300 ease-in-out ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
          GDG on Campus Co-Lead | Member at <br/>Next Tech Lab | Pre-Final Year | Full Stack Developer
          </p>
        </div>

        {/* Skoop widget is hidden on small and medium screens */}
        <div className="biowidget flex items-center justify-center m-2 sm:m-5 hidden lg:flex transition-opacity duration-500 ease-in-out">
          <div className="widgets-image">
            <Link to="https://blog.contactsushil.me/blog/korosukefirst/">
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://static.wikia.nocookie.net/kiteretsu/images/3/34/Orangekorosukelarge1200_%281%29.png"
                alt="Korosuke"
              />
            </Link>
          </div>
          <div className="widget-title ml-2">
            <Link to="https://blog.contactsushil.me/blog/korosukefirst">
              <h3 className={`text-xl ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>Korosuke</h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="bio-buttons flex flex-row mt-4 justify-start">
        <div className="connectbutton bg-[#0B65C2] rounded-lg ml-2 sm:ml-5 transition-transform duration-300 ease-in-out hover:scale-105">
          <Link to="https://blog.contactsushil.me/">
            <Button variant="contained" className="w-full">Blog</Button>
          </Link>
        </div>
        <div className="resumebutton ml-2 sm:ml-5 transition-transform duration-300 ease-in-out hover:scale-105">
          <Link to="https://contactsushil.me/sushilpandey.pdf">
            <Button variant="outlined" className="w-full">Resume</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
