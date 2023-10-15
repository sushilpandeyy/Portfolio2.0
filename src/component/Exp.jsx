import React from 'react'
import {exp} from "../../data/index"
import Liste from './common/Liste'
import { useSelector } from 'react-redux';

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
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className="bioo">
        <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Experience</h2>
        {exp.map(create)}
    </div>
  )
}

export default Exp