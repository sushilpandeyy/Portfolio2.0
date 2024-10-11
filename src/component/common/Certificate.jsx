import React from 'react';
import { Cert } from '../../../data';
import Listc from './Listc';

function add(info) {
  return (
    <Listc
      key={info.id}
      title={info.title}
      img={info.img}
      org={info.org}
      skills={info.skills}
      cred={info.Cred}
      date={info.date}
      link={info.link}
    />
  );
}

const Certificate = () => {
  return (
    <div className="certificate-container p-4 space-y-4 overflow-visible">
      {Cert.map(add)}
    </div>
  );
}

export default Certificate;
