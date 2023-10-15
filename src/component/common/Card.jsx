import React from 'react';
import { useSelector } from 'react-redux';

const Card = (props) => {
  
  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };
  const currentMode = useSelector((state) => state.mode.current);
  return (
    <li className="card-feat" onClick={handleCardClick} style={{
      backgroundColor: (currentMode === "Light") ? "white" : "#232323"
    }}>
      <div className="card-para">
        <h4 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>{props.type}</h4>
      </div>
      <img className="card-img" src={props.img} alt="" />
      <div className="card-des">
        <p style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>{props.info}</p>
      </div>
    </li>
  );
};

export default Card;
