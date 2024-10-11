import React from 'react';
import { useSelector } from 'react-redux';

const Card = (props) => {
  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };

  const currentMode = useSelector((state) => state.mode.current);

  return (
    <li
      className={`card-feat border rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 hover:z-10 ${currentMode === 'Light' ? 'bg-white' : 'bg-gray-800'}`}
      onClick={handleCardClick}
      style={{ zIndex: 1 }}
    >
      {/* Title */}
      <div className="card-para mb-2">
        <h4 className={`text-lg sm:text-xl font-semibold ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
          {props.type}
        </h4>
      </div>
      
      {/* Image */}
      <img
        className="card-img w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-2"
        src={props.img}
        alt=""
      />
      
      {/* Description */}
      <div className="card-des">
        <p className={`text-sm sm:text-base md:text-lg ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-300'}`}>
          {props.info}
        </p>
      </div>
    </li>
  );
};

export default Card;
