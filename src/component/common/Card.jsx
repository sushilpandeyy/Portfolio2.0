import React from 'react'

const Card = (props) => {
  return (
    <>
    <li className="card-feat">
        <div className="card-para"><h4>{props.type}</h4></div>
        <img className='card-img' src={props.img} alt="" />
        <div className="card-des"><p>{props.info}</p></div>
    </li>
    </>
   )
}

export default Card