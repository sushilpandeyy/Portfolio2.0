import React from 'react';

const Card = (props) => {
  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };

  return (
    <li className="card-feat" onClick={handleCardClick}>
      <div className="card-para">
        <h4>{props.type}</h4>
      </div>
      <img className="card-img" src={props.img} alt="" />
      <div className="card-des">
        <p>{props.info}</p>
      </div>
    </li>
  );
};

export default Card;
