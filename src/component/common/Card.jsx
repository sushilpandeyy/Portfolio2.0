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
      <div className="card-para mb-2">
        <h4 className={`text-lg font-semibold ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
          {props.type}
        </h4>
      </div>
      <img className="card-img w-full h-40 object-cover rounded-lg mb-2" src={props.img} alt="" />
      <div className="card-des">
        <p className={`text-base ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-300'}`}>
          {props.info}
        </p>
      </div>
    </li>
  );
};

export default Card;
