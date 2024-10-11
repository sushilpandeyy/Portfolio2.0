import React from 'react';
import { frontskill, backskill, database, program, other } from '../../../data';
import { useSelector } from 'react-redux';

const SkillCard = ({ img, title }) => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div
      className={`skill-card p-2 sm:p-4 md:p-6 rounded-lg border shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ${
        currentMode === 'Light' ? 'bg-white border-gray-100' : 'bg-gray-900 border-gray-700'
      }`}
    >
      <div className="w-full h-24 sm:h-32 md:h-40 mb-3">
        <img className="w-full h-full object-contain rounded-lg" src={img} alt={title} />
      </div>
      <h4
        className={`text-sm sm:text-md md:text-lg font-semibold ${
          currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'
        }`}
      >
        {title}
      </h4>
    </div>
  );
};

const Skills = () => {
  const currentMode = useSelector((state) => state.mode.current);

  const headingClass = `text-lg sm:text-xl md:text-2xl font-bold mb-6 ${
    currentMode === 'Light' ? 'text-gray-800' : 'text-gray-100'
  }`;

  const renderSkills = (skills) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.id} img={skill.img} title={skill.title} />
      ))}
    </div>
  );

  return (
    <div className="skills-container px-4 sm:px-6 md:px-8 py-8 space-y-10">
      <div>
        <h2 className={headingClass}>Programming Languages</h2>
        {renderSkills(program)}
      </div>

      <div>
        <h2 className={headingClass}>Frontend</h2>
        {renderSkills(frontskill)}
      </div>

      <div>
        <h2 className={headingClass}>Backend</h2>
        {renderSkills(backskill)}
      </div>

      <div>
        <h2 className={headingClass}>Database</h2>
        {renderSkills(database)}
      </div>

      <div>
        <h2 className={headingClass}>Other Skills</h2>
        {renderSkills(other)}
      </div>
    </div>
  );
};

export default Skills;
