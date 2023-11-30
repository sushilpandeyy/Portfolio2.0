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
            }}>Hi there! I'm Sushil Pandey, a first-year Computer Science Engineering student at SRM AP. 
            I'm a passionate learner, always seeking new technologies to master. From participating in hackathons and taking on leadership roles to freelancing in my spare time, I'm fully immersed in the world of technology.</p>
    </div>
  )
}

export default About