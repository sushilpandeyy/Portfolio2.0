import React from 'react'
import { useSelector } from 'react-redux';


const Liste = (props) => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className="projectbox">
        <div className="project-image">
            <img className="project-image-propp" src={props.img} alt={props.title} />
        </div>
        <div className="project-info">
            <h3 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>{props.title}</h3>
            <p style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>{props.org}</p>
            <p style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>{props.dur}</p>
            <p style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>{props.info}</p>
            {(props.skill)?<p style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}><b>Skills: </b>{props.skill}</p>:" "}
        </div>
        
    </div>
  )
}

export default Liste