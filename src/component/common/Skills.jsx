import React from 'react'
import { frontskill, backskill, database, program, other } from '../../../data'
import Cardskill from './Cardskill'
import { useSelector } from 'react-redux';
import "../../App.css"

function createc(item){
  
  return <Cardskill
  key={item.id}
  img={item.img}
  title={item.title}
  />
}

const Skills = () => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
   <>
   <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Programming Language</h2>
   <div className="skill-cards">
   {program.map(createc)}
   </div>
   <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Frontend</h2>

   <div className="skill-cards">
   {frontskill.map(createc)}
   </div>
            <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Backend</h2>
   <div className="skill-cards">
   {backskill.map(createc)}
   </div>
   <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Database</h2>
   <div className="skill-cards">
   {database.map(createc)}
   </div>
   <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Other</h2>
   <div className="skill-cards">
   {other.map(createc)}
   </div>
   </>
  )
}

export default Skills