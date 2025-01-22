import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import assests from '../assets/all';
import { useSelector } from 'react-redux';

const Bio = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden transition-colors duration-300
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
      
      {/* Header Image */}
      <div className="relative h-[150px] sm:h-[280px] w-full">
        <img 
          className="w-full h-full object-cover"
          src={assests.headergif} 
          alt="Header Cover"
        />

        {/* Profile Picture */}
        <div className="absolute left-6 transform -translate-y-1/2">
          <div className="relative group">
            <div className={`rounded-full p-1 transition-transform duration-300 group-hover:scale-105
              ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
              <img
                className="w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] rounded-full object-cover
                  ring-4 ring-offset-2 transition-all duration-300
                  ${isDark ? 'ring-gray-800 ring-offset-gray-900' : 'ring-white ring-offset-white'}"
                src={assests.profile}
                alt="Sushil Pandey"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pt-16 sm:pt-24 pb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Bio Details */}
          <div className="flex-grow">
            <h1 className={`text-2xl sm:text-3xl font-bold transition-colors duration-300
              ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              Sushil Pandey
            </h1>
            <p className={`mt-2 text-sm sm:text-base font-medium transition-colors duration-300
              ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              GDG on Campus Co-Lead | Member at <br/>
              Next Tech Lab | Pre-Final Year | Full Stack Developer
            </p>
          </div>

          {/* Korosuke Widget */}
          <div className="hidden lg:flex items-center mt-4 sm:mt-0 p-3 rounded-lg transition-all duration-300
            ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}">
            <Link to="https://blog.contactsushil.me/blog/korosukefirst/" 
              className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://static.wikia.nocookie.net/kiteretsu/images/3/34/Orangekorosukelarge1200_%281%29.png"
                alt="Korosuke"
              />
              <h3 className={`text-lg font-medium transition-colors duration-300
                ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                Korosuke
              </h3>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Link to="https://blog.contactsushil.me/" className="flex-1 sm:flex-none">
            <Button 
              variant="contained" 
              className="w-full sm:w-auto px-8 py-2 bg-blue-600 hover:bg-blue-700
                transition-all duration-300 normal-case text-base font-medium">
              Blog
            </Button>
          </Link>
          <Link to="https://drive.google.com/file/d/1tZS-ykEI_jjeQcyedojApieYP2ldK37A/view?usp=sharing" 
            className="flex-1 sm:flex-none">
            <Button 
              variant="outlined"
              className="w-full sm:w-auto px-8 py-2 border-2 normal-case text-base font-medium">
              Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;