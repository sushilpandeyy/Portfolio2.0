import React from 'react'

const Listc = (props) => {
  return (
    <div className="projectbox">
        <div className="project-image">
            <img className="project-image-propp" src={props.img} alt={props.title} />
        </div>
        <div className="project-info">
            <h3>{props.title}</h3>
            <h4>{props.org}</h4>
            <p><b>Issued: </b>{props.date}</p>
            <p><b>Credential ID: </b>{props.cred}</p>
            <p><b>Skills: </b>{props.skills}</p>
        </div>
        
    </div>
  )
}

export default Listc