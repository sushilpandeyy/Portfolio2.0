import React from 'react'
import { useSelector } from 'react-redux';

const Cardskill = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  return (
    <div className="skillcard" style={{
      border: (currentMode === "Light") ? "white" : "#232323"
    }}>
        <img className="sk-img" src={props.img} alt="" />
        <h4 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>{props.title}</h4>
    </div>
  )
}

export default Cardskill