import React from 'react'
import {Proj} from '../../../data/index'
import List from '../common/List'

function list(pro){
  return <List
      key={pro.id}
      title={pro.title}
      img={pro.img}
      info={pro.description}
      skills={pro.skills}
      link={pro.link}
  />
}

const Projects = () => {
  return (
    <>
    {Proj.map(list)}
    </>
  )
}

export default Projects