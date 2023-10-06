import React from 'react'


const Liste = (props) => {
  return (
    <div className="projectbox">
        <div className="project-image">
            <img className="project-image-propp" src={props.img} alt={props.title} />
        </div>
        <div className="project-info">
            <h3>{props.title}</h3>
            <p>{props.org}</p>
            <p>{props.dur}</p>
            <p>{props.info}</p>
            {(props.skill)?<p><b>Skills: </b>{props.skill}</p>:" "}
        </div>
        
    </div>
  )
}

export default Liste