import React from 'react';
import { Cert } from '../../../data';
import Listc from './Listc';
import { useSelector } from 'react-redux';

const CertificateItem = ({
  id,
  title,
  img,
  org,
  skills,
  Cred,
  date,
  link
}) => (
  <Listc
    key={id}
    title={title}
    img={img}
    org={org}
    skills={skills}
    cred={Cred}
    date={date}
    link={link}
  />
);

const Certificate = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  return (
    <div className={`w-full rounded-xl shadow-lg transition-colors duration-300
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-bold transition-colors duration-300
            ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Certifications
          </h2>
        </div>

        {/* Certificates List */}
        <div className="space-y-6">
          {Cert.map((certificate) => (
            <CertificateItem key={certificate.id} {...certificate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;