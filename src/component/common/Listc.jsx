import React from 'react';
import { useSelector } from 'react-redux';

const Listc = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  
  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };

  return (
    <div 
      className="projectbox transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10 p-2 sm:p-4 md:p-5 flex flex-col sm:flex-row items-center"
      onClick={handleCardClick}
    >
      {/* Image section */}
      <div className="project-image flex-shrink-0 overflow-hidden w-full sm:w-1/4 lg:w-1/5 mb-3 sm:mb-0">
        <img
          className="project-image-propp w-auto h-auto max-w-[100px] max-h-[100px] sm:max-w-[120px] sm:max-h-[120px] object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          src={props.img}
          alt={props.title}
        />
      </div>

      {/* Information section */}
      <div className="project-info text-center sm:text-left sm:ml-4 lg:ml-6 w-full sm:w-3/4 lg:w-4/5">
        <h3 className="text-md sm:text-lg font-semibold mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.title}
        </h3>
        <h4 className="text-sm sm:text-base mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          Issued by: {props.org}
        </h4>
        <p className="text-xs sm:text-sm mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          <b>On: </b>{props.date}
        </p>
        <p className="text-xs sm:text-sm mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          <b>Credential ID: </b>{props.cred}
        </p>
        <p className="text-xs sm:text-sm mb-1" style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          <b>Skills: </b>{props.skills}
        </p>
      </div>
    </div>
  );
};

export default Listc;
