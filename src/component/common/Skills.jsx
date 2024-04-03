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
   <div classname="h3skills" style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Programming Languages</div>
   <div className="skill-cards">
   {program.map(createc)}
   </div>
   <div classname="h3skills" style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Frontend</div>
   <div className="skill-cards">
   {frontskill.map(createc)}
   </div>
   <div classname="h3skills" style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Backend</div>
   <div className="skill-cards">
   {backskill.map(createc)}
   </div>
   <div classname="h3skills" style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Database</div>
   <div className="skill-cards">
   {database.map(createc)}
   </div>
   <div classname="h3skills" style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Other</div>
   <div className="skill-cards">
   {other.map(createc)}
   </div>
   </>
  )
}

export default Skills