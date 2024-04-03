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
            }}>Hello! I'm Sushil Pandey, a second-year Computer Science Engineering student who recently completed an internship as a Full Stack Developer at Myraa Technologies, where I contributed to the development of a groundbreaking healthcare product. Proficient in a variety of Full Stack technologies, I am dedicated to delivering innovative solutions in the tech industry.</p>
    </div>
  )
}

export default About