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
            }}>Hello! I’m Sushil Pandey, a third-year Computer Science Engineering student with a recent internship experience as a Full Stack Developer. I am proficient in a variety of Full Stack technologies and am dedicated to delivering innovative solutions in the tech industry.</p>
    </div>
  )
}

export default About