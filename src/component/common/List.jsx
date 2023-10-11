import React from 'react'

const List = (props) => {
  return (
    <div className="projectbox">
        <div className="project-image">
            <img className="project-image-propp" src={props.img} alt={props.title} />
        </div>
        <div className="project-info">
            <h3 className='pro-h3-mobile'>{props.title}</h3>
            <p className='pro-p-mobile'>{props.info}</p>
            <p className='pro-p-mobile'><b>Skills: </b>{props.skills}</p>
        </div>
        
    </div>
  )
}

export default List