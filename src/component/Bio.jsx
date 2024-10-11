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
            Full Stack Developer | Formerly with Myraa Technologies | Seeking Internship Opportunities
          </p>
        </div>

        {/* Skoop widget is hidden on small and medium screens */}
        <div className="biowidget flex items-center justify-center m-2 sm:m-5 hidden lg:flex transition-opacity duration-500 ease-in-out">
          <div className="widgets-image">
            <Link to="https://skoop1.vercel.app">
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://res.cloudinary.com/djug8zfu7/image/upload/v1710962200/zng2ogv0tnab6mnoqtit.png"
                alt="Skoop"
              />
            </Link>
          </div>
          <div className="widget-title ml-2">
            <Link to="https://skoop1.vercel.app">
              <h3 className={`text-xl ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>Skoop</h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="bio-buttons flex flex-row mt-4 justify-start">
        <div className="connectbutton bg-[#0B65C2] rounded-lg ml-2 sm:ml-5 transition-transform duration-300 ease-in-out hover:scale-105">
          <Link to="https://linktr.ee/contact.sushil">
            <Button variant="contained" className="w-full">Connect</Button>
          </Link>
        </div>
        <div className="resumebutton ml-2 sm:ml-5 transition-transform duration-300 ease-in-out hover:scale-105">
          <Link to="https://drive.google.com/file/d/14_DwlH74vO0QRFN6ir005uTV7ep4k0f2/view?usp=sharing">
            <Button variant="outlined" className="w-full">Resume</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
