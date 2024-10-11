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
      <div className="card-para mb-2 text-center">
        <h4 className={`text-lg sm:text-xl font-semibold ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
          {props.type}
        </h4>
      </div>
      
      {/* Image */}
      <img
        className="card-img w-full h-[200px] sm:h-[220px] object-cover rounded-lg"
        src={props.img}
        alt={props.title}
      />
    </li>
  );
};

export default Card;
