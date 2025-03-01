import React from 'react';
import { Proj } from '../../../data/index';
import List from '../common/List';
import { useSelector } from 'react-redux';

const Projects = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  return (
    <div className={`w-full rounded-xl shadow-lg transition-colors duration-300
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-bold transition-colors duration-300
            ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Projects
          </h2>
        </div>

        <div className="projects-container">
          <List items={Proj} />
        </div>
      </div>
    </div>
  );
};

export default Projects;