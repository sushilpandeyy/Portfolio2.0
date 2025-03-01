import React from 'react';
import { useSelector } from 'react-redux';

const Liste = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  return (
    <div className={`group p-4 rounded-xl transition-all duration-300
      ${isDark 
        ? 'bg-gray-800 hover:bg-gray-700' 
        : 'bg-white hover:bg-gray-50'}
      border hover:shadow-lg hover:-translate-y-1
      ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
          <div className={`w-24 h-24 rounded-xl overflow-hidden
            transition-transform duration-300 group-hover:scale-105
            ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <img
              src={props.img}
              alt={props.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-grow space-y-2 w-full text-center sm:text-left">
          <h3 className={`text-lg font-bold transition-colors duration-300
            ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {props.title}
          </h3>

          <p className={`text-sm font-medium transition-colors duration-300
            ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {props.org}
          </p>

          <div className={`inline-block px-3 py-1 rounded-full text-sm
            ${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
            {props.dur}
          </div>

          <p className={`text-sm transition-colors duration-300 mt-2
            ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {props.info}
          </p>

          {props.skill && (
            <div className="mt-3">
              <p className={`text-sm transition-colors duration-300
                ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className={`font-semibold
                  ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Skills:{' '}
                </span>
                {props.skill}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Liste;