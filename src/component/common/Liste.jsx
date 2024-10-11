import React from 'react';
import { useSelector } from 'react-redux';

const Liste = (props) => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div
      className="projectbox transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10 p-2 sm:p-3 md:p-4 flex flex-col sm:flex-row items-center"
    >
      {/* Image container */}
      <div className="project-image flex-shrink-0 overflow-hidden w-full sm:w-1/4 mb-3 sm:mb-0">
        <img
          className="project-image-propp w-auto h-auto max-w-[100px] max-h-[100px] object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          src={props.img}
          alt={props.title}
        />
      </div>

      {/* Info container */}
      <div className="project-info text-center sm:text-left sm:ml-4 w-full sm:w-3/4">
        <h3 className="text-md sm:text-lg font-semibold mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.title}
        </h3>
        <p className="text-xs sm:text-sm mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.org}
        </p>
        <p className="text-xs sm:text-sm mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.dur}
        </p>
        <p className="text-xs sm:text-sm mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.info}
        </p>
        {props.skill && (
          <p className="text-xs sm:text-sm" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
            <b>Skills: </b>{props.skill}
          </p>
        )}
      </div>
    </div>
  );
};

export default Liste;
