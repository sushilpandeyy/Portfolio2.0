import React from 'react';
import { useSelector } from 'react-redux';

const Liste = (props) => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div
      className="projectbox transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10"
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
        <p style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.org}
        </p>
        <p style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.dur}
        </p>
        <p style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
          {props.info}
        </p>
        {props.skill ? (
          <p style={{ color: currentMode === 'Light' ? '#191919' : '#E9E9E9' }}>
            <b>Skills: </b>{props.skill}
          </p>
        ) : (
          ' '
        )}
      </div>
    </div>
  );
};

export default Liste;
