import React from 'react';
import { useSelector } from 'react-redux';

const Card = (props) => {
  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };

  const currentMode = useSelector((state) => state.mode.current);

  return (
    <li
      className={`card-feat border rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 cursor-pointer transition-transform hover:scale-105 hover:z-10 w-max ${
        currentMode === 'Light' ? 'bg-white' : 'bg-gray-800'
      }`}
      onClick={handleCardClick}
      style={{ zIndex: 1 }}
    >
      {/* Title */}
      <div className="card-para mb-2">
        <h4 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
          {props.type}
        </h4>
      </div>
      
      {/* Image */}
      <img
        className="card-img w-auto max-w-[300px] h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-3"
        src={props.img}
        alt={props.title}
      />
      
      {/* Description */}
      <div className="card-des">
        <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-300'}`}>
          {props.info}
        </p>
      </div>
    </li>
  );
};

export default Card;
