import React from 'react'
import { useSelector } from 'react-redux';

const About = () => {
  const currentMode = useSelector((state) => state.mode.current);
  return (
    <div className="bioo">
        <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>About </h2>
        <p className='about-p' style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Hi there! I'm Sushil Pandey, second-year Computer Science Engineering student currently interning as a Full Stack Developer at Myraa Technologies, dedicated to building a new healthcare product. Proficient in Full Stack technologies. Committed to contributing innovative solutions in the tech industry.</p>
    </div>
  )
}

export default About