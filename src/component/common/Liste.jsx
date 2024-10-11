import React from 'react';
import { useSelector } from 'react-redux';

const Liste = (props) => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div
      className="projectbox transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10 p-4 md:p-6 lg:p-8 flex flex-col sm:flex-row items-center"
    >
      {/* Image container */}
      <div className="project-image flex-shrink-0 overflow-hidden w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
        <img
          className="project-image-propp w-auto h-auto max-w-[150px] max-h-[150px] sm:max-w-full sm:max-h-full object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          src={props.img}
          alt={props.title}
        />
      </div>

      {/* Info container */}
      <div className="project-info text-center sm:text-left sm:ml-4 lg:ml-6 w-full sm:w-2/3 lg:w-3/4">
        <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.title}
        </h3>
        <p className="text-sm sm:text-base mb-2" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.org}
        </p>
        <p className="text-sm sm:text-base mb-2" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.dur}
        </p>
        <p className="text-sm sm:text-base mb-2" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.info}
        </p>
        {props.skill && (
          <p className="text-sm sm:text-base" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
            <b>Skills: </b>{props.skill}
          </p>
        )}
      </div>
    </div>
  );
};

export default Liste;
