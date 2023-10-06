import React from 'react'

const Cardskill = (props) => {
  return (
    <div className="skillcard">
        <img className="sk-img" src={props.img} alt="" />
        <h4>{props.title}</h4>
    </div>
  )
}

export default Cardskill