import React from 'react'
import Liste from './common/Liste'
import { useSelector } from 'react-redux';

const Education = () => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className="bioo">
    <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Education</h2>
    <Liste
    key="srm"
    org="Bachelor of Technology - B.Tech, Computer Science"
    title="SRM University AP"
    dur = "2022-2026"
    info=""
    skill=""
    img="https://upload.wikimedia.org/wikipedia/en/6/6e/SRM_University%2C_Andhra_Pradesh_logo.png"
    />
    </div>
  )
}

export default Education