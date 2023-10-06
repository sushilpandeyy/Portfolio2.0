import React from 'react'
import { frontskill, backskill, database, program, other } from '../../../data'
import Cardskill from './Cardskill'

function createc(item){
  return <Cardskill
  key={item.id}
  img={item.img}
  title={item.title}
  />
}

const Skills = () => {
  return (
   <>
   <h3>Programming Languages</h3>
   <div className="skill-cards">
   {program.map(createc)}
   </div>
   <h3>Frontend</h3>
   <div className="skill-cards">
   {frontskill.map(createc)}
   </div>
   <h3>Backend</h3>
   <div className="skill-cards">
   {backskill.map(createc)}
   </div>
   <h3>Database</h3>
   <div className="skill-cards">
   {database.map(createc)}
   </div>
   <h3>Other</h3>
   <div className="skill-cards">
   {other.map(createc)}
   </div>
   </>
  )
}

export default Skills