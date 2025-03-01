import React from 'react';
import { useSelector } from 'react-redux';
import { ExternalLink } from 'lucide-react';

const Listc = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';
  
  const handleCardClick = () => {
    if (props.link) {
      window.open(props.link, '_blank');
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`group p-6 rounded-xl transition-all duration-300 ${props.link ? 'cursor-pointer' : ''}
        ${isDark 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-white hover:bg-gray-50'} 
        border hover:shadow-lg hover:-translate-y-1
        ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <div className={`w-28 h-28 rounded-xl overflow-hidden
            transition-transform duration-300 group-hover:scale-105
            ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <img
              src={props.img}
              alt={props.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-grow text-center sm:text-left space-y-3">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <h3 className={`text-lg font-bold transition-colors duration-300
              ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {props.title}
            </h3>
            {props.link && (
              <ExternalLink className={`w-4 h-4 transition-colors duration-300
                ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
            )}
          </div>

          <div className={`text-base font-medium transition-colors duration-300
            ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Issued by: {props.org}
          </div>

          <div className={`text-sm transition-colors duration-300
            ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className={`font-semibold
              ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              On:{' '}
            </span>
            {props.date}
          </div>

          <div className={`text-sm font-mono transition-colors duration-300
            ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className={`font-semibold font-sans
              ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Credential ID:{' '}
            </span>
            {props.cred}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {props.skills.split(',').map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm
                  ${isDark 
                    ? 'bg-gray-900 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'}`}
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listc;