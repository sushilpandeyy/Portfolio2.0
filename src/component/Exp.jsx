import React from 'react'
import {exp} from "../../data/index"
import Liste from './common/Liste'
function create(info){
    return <Liste
    key={info.id}
    title={info.title}
    org={info.org}
    dur={info.dur}
    info={info.info}
    skill={info.skill}
    img={info.img}
    />
}

const Exp = () => {
  return (
    <div className="bioo">
        <h2>Experience</h2>
        {exp.map(create)}
    </div>
  )
}

export default Exp