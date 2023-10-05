import React from 'react'

const List = (props) => {
  return (
    <div className="projectbox">
        <div className="project-image">
            <img className="project-image-propp" src={props.img} alt={props.title} />
        </div>
        <div className="project-info">
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <p><b>Skills: </b>{props.skills}</p>
        </div>
        
    </div>
  )
}

export default List