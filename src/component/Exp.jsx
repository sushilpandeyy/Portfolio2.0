import React from 'react';
import { exp } from "../../data/index";
import Liste from './common/Liste';
import { useSelector } from 'react-redux';

function create(info) {
  return (
    <Liste
      key={info.id}
      title={info.title}
      org={info.org}
      dur={info.dur}
      info={info.info}
      skill={info.skill}
      img={info.img}
    />
  );
}

const Exp = () => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className={`bioo p-6 rounded-lg ${currentMode === 'Light' ? 'bg-white' : 'bg-gray-900'}`}>
      <h2 className={`text-3xl font-semibold mb-4 ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
        Experience
      </h2>
      {exp.map(create)}
    </div>
  );
}

export default Exp;
