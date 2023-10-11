import React from 'react'

const Listc = (props) => {
  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };


  return (
    <div className="projectbox" onClick={handleCardClick}>
        <div className="project-image">
            <img className="project-image-propp" src={props.img} alt={props.title} />
        </div>
        <div className="project-info">
            <h3>{props.title}</h3>
            <h4>Issued by: {props.org}</h4>
            <p><b>On: </b>{props.date}</p>
            <p><b>Credential ID: </b>{props.cred}</p>
            <p><b>Skills: </b>{props.skills}</p>
            
        </div>
        
    </div>
  )
}

export default Listc