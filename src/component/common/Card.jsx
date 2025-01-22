import React from 'react';
import { useSelector } from 'react-redux';
import { ExternalLink } from 'lucide-react';

const Card = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  const handleCardClick = () => {
    window.open(props.link, '_blank');
  };

  return (
    <li
      onClick={handleCardClick}
      className={`group relative w-[300px] rounded-xl transition-all duration-300 cursor-pointer
        border hover:shadow-lg hover:-translate-y-1
        ${isDark 
          ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' 
          : 'bg-white hover:bg-gray-50 border-gray-200'}`}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video rounded-t-xl overflow-hidden">
        <img
          src={props.img}
          alt={props.type}
          className="w-full h-full object-cover transition-transform duration-300 
            group-hover:scale-105"
        />
        
        {/* External Link Icon */}
        <div className={`absolute top-3 right-3 p-2 rounded-full 
          transition-opacity duration-300 opacity-0 group-hover:opacity-100
          ${isDark ? 'bg-gray-800/80' : 'bg-white/80'}`}>
          <ExternalLink className={`w-4 h-4
            ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h4 className={`text-lg font-bold transition-colors duration-300
          ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
          {props.type}
        </h4>
        
        {/* Description */}
        <p className={`text-sm line-clamp-3 transition-colors duration-300
          ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {props.info}
        </p>
      </div>
    </li>
  );
};

export default Card;