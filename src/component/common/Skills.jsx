import React from 'react';
import { frontskill, backskill, database, program, other } from '../../../data';
import Cardskill from './Cardskill';
import { useSelector } from 'react-redux';

function createc(item) {
  return (
    <Cardskill
      key={item.id}
      img={item.img}
      title={item.title}
    />
  );
}

const Skills = () => {
  const currentMode = useSelector((state) => state.mode.current);

  const headingClass = `text-2xl font-semibold mb-4 ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`;

  return (
    <>
      <h2 className={headingClass}>Programming Language</h2>
      <div className="skill-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {program.map(createc)}
      </div>

      <h2 className={headingClass}>Frontend</h2>
      <div className="skill-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {frontskill.map(createc)}
      </div>

      <h2 className={headingClass}>Backend</h2>
      <div className="skill-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {backskill.map(createc)}
      </div>

      <h2 className={headingClass}>Database</h2>
      <div className="skill-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {database.map(createc)}
      </div>

      <h2 className={headingClass}>Other</h2>
      <div className="skill-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {other.map(createc)}
      </div>
    </>
  );
};

export default Skills;
