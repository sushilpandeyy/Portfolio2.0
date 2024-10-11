import React from 'react';
import Liste from './common/Liste';
import { useSelector } from 'react-redux';

const Education = () => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className={`p-6 rounded-lg border ${currentMode === 'Light' ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'}`}>
      <h2 className={`text-3xl font-semibold mb-4 ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
        Education
      </h2>
      <Liste
        key="srm"
        org="Bachelor of Technology - B.Tech, Computer Science"
        title="SRM University AP"
        dur="2022-2026"
        info=""
        skill=""
        img="https://upload.wikimedia.org/wikipedia/en/6/6e/SRM_University%2C_Andhra_Pradesh_logo.png"
      />
    </div>
  );
};

export default Education;
