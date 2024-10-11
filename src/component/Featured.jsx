import React from 'react';
import { data } from "../../data";
import Card from './common/Card';
import { useSelector } from 'react-redux';

function createcard(contact) {
  return (
    <Card
      key={contact.id}
      type={contact.type}
      img={contact.image}
      info={contact.info}
      link={contact.link}
    />
  );
}

const Featured = () => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className={`p-6 rounded-lg border overflow-visible ${currentMode === 'Light' ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'}`}>
      <h2 className={`text-3xl font-semibold mb-4 ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
        Featured
      </h2>
      <div className="vertical-al overflow-x-auto">
        <ul className="feat-card flex space-x-4">
          {data.map(createcard)}
        </ul>
      </div>
    </div>
  );
}

export default Featured;
