import React from 'react';
import { useSelector } from 'react-redux';

const Listc = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  
  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };

  return (
    <div 
      className="projectbox transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10" 
      onClick={handleCardClick}
    >
      <div className="project-image overflow-hidden">
        <img
          className="project-image-propp transition-transform duration-300 ease-in-out hover:scale-110"
          src={props.img}
          alt={props.title}
        />
      </div>
      <div className="project-info">
        <h3 style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.title}
        </h3>
        <h4 style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          Issued by: {props.org}
        </h4>
        <p style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          <b>On: </b>{props.date}
        </p>
        <p style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          <b>Credential ID: </b>{props.cred}
        </p>
        <p style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          <b>Skills: </b>{props.skills}
        </p>
      </div>
    </div>
  );
};

export default Listc;
