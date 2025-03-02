import React from 'react';
import { useSelector } from 'react-redux';

const Liste = (props) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  // Handle both legacy format (single promotion) and new format (promotions array)
  const hasPromotions = props.promotions?.length > 0 || props.promotion;
  const promotionsArray = props.promotions || (props.promotion ? [props.promotion] : []);
  
  return (
    <div className={`group p-4 rounded-xl transition-all duration-300
      ${isDark 
        ? 'bg-gray-800 hover:bg-gray-700' 
        : 'bg-white hover:bg-gray-50'}
      border hover:shadow-lg hover:-translate-y-1
      ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
          <div className={`w-24 h-24 rounded-xl overflow-hidden
            transition-transform duration-300 group-hover:scale-105
            ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <img
              src={props.img}
              alt={props.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-grow space-y-2 w-full text-center sm:text-left">
          <h3 className={`text-lg font-bold transition-colors duration-300
            ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {props.title}
          </h3>

          <p className={`text-sm font-medium transition-colors duration-300
            ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {props.org}
            {props.location && <span> · {props.location}</span>}
            {props.type && <span> · {props.type}</span>}
          </p>

          <div className={`inline-block px-3 py-1 rounded-full text-sm
            ${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
            {props.dur}
          </div>

          {/* Only show parent info and skills if there are NO promotions */}
          {!hasPromotions && (
            <>
              <p className={`text-sm transition-colors duration-300 mt-2
                ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {props.info}
              </p>

              {props.skill && (
                <div className="mt-3">
                  <p className={`text-sm transition-colors duration-300
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className={`font-semibold
                      ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Skills:{' '}
                    </span>
                    {props.skill}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Display promotions timeline if exists */}
          {hasPromotions && (
            <div className="relative mt-8">
              {/* Main timeline line */}
              <div className={`absolute left-3 top-0 bottom-0 w-px h-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              
              {/* Render each promotion */}
              <div className="space-y-12">
                {promotionsArray.map((promotion, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot for each promotion */}
                    <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
                      <div className={`absolute left-1.5 top-1.5 w-3 h-3 rounded-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                    </div>
                    
                    {/* Promotion content */}
                    <div>
                      <h4 className={`text-xl font-semibold
                        ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                        {promotion.title}
                      </h4>
                      <p className={`text-sm mt-1
                        ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {promotion.dur}
                      </p>
                      <p className={`text-base mt-4
                        ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {promotion.description}
                      </p>
                      
                      {/* Skills for this specific promotion */}
                      {promotion.skills && (
                        <div className="mt-3">
                          <p className={`text-sm 
                            ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className={`font-semibold
                              ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              Skills:{' '}
                            </span>
                            {promotion.skills}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Liste;