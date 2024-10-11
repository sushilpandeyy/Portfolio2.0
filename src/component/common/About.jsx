import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const currentMode = useSelector((state) => state.mode.current);
  
  return (
    <div className={`bioo p-6 rounded-lg ${currentMode === 'Light' ? 'bg-white' : 'bg-gray-900'}`}>
      <h2 className={`text-3xl font-semibold mb-4 ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
        About
      </h2>
      <p className={`about-p text-lg ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
        Hello! I’m Sushil Pandey, a third-year Computer Science Engineering student with a recent internship experience as a Full Stack Developer. I am proficient in a variety of Full Stack technologies and am dedicated to delivering innovative solutions in the tech industry.
      </p>
    </div>
  );
}

export default About;
