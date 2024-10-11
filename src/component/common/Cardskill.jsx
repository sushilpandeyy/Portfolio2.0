import React from 'react';
import { useSelector } from 'react-redux';

const Cardskill = (props) => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div
      className={`skillcard p-2 sm:p-3 md:p-4 rounded-lg border cursor-pointer transition-transform transform hover:scale-105 hover:z-10 overflow-hidden ${
        currentMode === 'Light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'
      }`}
    >
      {/* Adjusted image size and layout */}
      <div className="w-full h-20 sm:h-28 md:h-36 mb-2">
        <img
          className="sk-img w-full h-full object-contain rounded-lg"
          src={props.img}
          alt={props.title}
        />
      </div>
      <h4
        className={`text-sm sm:text-md md:text-lg font-semibold ${
          currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'
        }`}
      >
        {props.title}
      </h4>
    </div>
  );
};

export default Cardskill;
