import React from 'react';
import { frontskill, backskill, database, program, other } from '../../../data';
import { useSelector } from 'react-redux';

const SkillCard = ({ img, title }) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  return (
    <div className={`group p-4 rounded-xl transition-all duration-300
      ${isDark 
        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
        : 'bg-white hover:bg-gray-50 border border-gray-200'} 
      hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="w-full aspect-square flex items-center justify-center p-4
        rounded-lg transition-colors duration-300
        ${isDark ? 'bg-gray-900' : 'bg-gray-50'}">
        <img 
          className="w-full h-full object-contain transition-transform duration-300 
            group-hover:scale-110 filter
            ${isDark ? 'brightness-90 group-hover:brightness-100' : 'brightness-100'}"
          src={img} 
          alt={title} 
        />
      </div>
      <h4 className={`mt-4 text-center font-medium transition-colors duration-300
        ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {title}
      </h4>
    </div>
  );
};

const SkillSection = ({ title, skills }) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h2 className={`text-xl sm:text-2xl font-bold transition-colors duration-300
          ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
          {title}
        </h2>
        <div className={`ml-4 flex-grow h-px transition-colors duration-300
          ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} img={skill.img} title={skill.title} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  const sections = [
    { title: 'Programming Languages', skills: program },
    { title: 'Frontend Development', skills: frontskill },
    { title: 'Backend Development', skills: backskill },
    { title: 'Database Management', skills: database },
    { title: 'Other Skills', skills: other }
  ];

  return (
    <div className={`w-full rounded-xl shadow-lg transition-colors duration-300 overflow-hidden
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
      <div className="p-6 sm:p-8 space-y-12">
        {sections.map((section, index) => (
          <SkillSection 
            key={index}
            title={section.title} 
            skills={section.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;