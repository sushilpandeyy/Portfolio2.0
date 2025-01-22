import React from 'react';
import { useSelector } from 'react-redux';

const Cardskill = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  return (
    <div
      className={`group p-4 rounded-xl transition-all duration-300 cursor-pointer
        border hover:shadow-lg hover:-translate-y-1
        ${isDark 
          ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' 
          : 'bg-white hover:bg-gray-50 border-gray-200'}`}
    >
      {/* Image Container */}
      <div className={`w-full aspect-square mb-4 rounded-lg overflow-hidden
        transition-colors duration-300 p-4
        ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <img
          src={props.img}
          alt={props.title}
          className="w-full h-full object-contain transition-transform duration-300 
            group-hover:scale-110 filter
            ${isDark ? 'brightness-90 group-hover:brightness-100' : 'brightness-100'}"
        />
      </div>

      {/* Title */}
      <h4 className={`text-center text-base font-semibold transition-colors duration-300
        ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
        {props.title}
      </h4>
    </div>
  );
};

export default Cardskill;