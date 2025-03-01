 import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { data } from "../../data";
 
const Card = ({ type, img, info, link, className }) => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode === 'Dark';

  return (
    <div className={`h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300
      ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
      ${className}`}
    >
      <div className="aspect-video w-full relative overflow-hidden">
        <img 
          src={img} 
          alt={type}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <span className={`text-sm font-medium mb-2 
          ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
          {type}
        </span>
        <p className={`mt-2 text-base font-medium line-clamp-2
          ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
          {info}
        </p>
        <a 
          href={link}
          className={`mt-4 inline-flex items-center text-sm font-medium
            ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More 
          <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

 
const Featured = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode === 'Dark';
  const [currentSlide, setCurrentSlide] = useState(0);
  
  
  const [visibleSlides, setVisibleSlides] = useState(3);
  
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(data.length / visibleSlides);

  const nextSlide = () => { 
    const nextIndex = currentSlide + visibleSlides; 
    if (nextIndex >= data.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(nextIndex);
    }
  };

  const prevSlide = () => { 
    const prevIndex = currentSlide - visibleSlides;
     
    if (prevIndex < 0) { 
      const lastPageStart = Math.max(0, data.length - (data.length % visibleSlides || visibleSlides));
      setCurrentSlide(lastPageStart);
    } else {
      setCurrentSlide(prevIndex);
    }
  };
   
  const goToPage = (pageIndex) => {
    setCurrentSlide(pageIndex * visibleSlides);
  };

  const navigationButtonClass = `
    ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}
    ${isDark ? 'text-gray-200' : 'text-gray-800'}
    p-3 rounded-full shadow-md transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${isDark ? 'focus:ring-gray-600' : 'focus:ring-gray-400'}
  `;

  return (
    <div className={`w-full py-8 px-6 rounded-2xl shadow-xl transition-colors duration-300
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}
    > 
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className={`text-2xl font-bold 
          ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        
        <div className="flex gap-3">
          <button 
            onClick={prevSlide}
            className={navigationButtonClass}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className={navigationButtonClass}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
 
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)`,
            width: `${(data.length * 100) / visibleSlides}%`,
          }}
        >
          {data.map((item, index) => (
            <div 
              key={index} 
              className={`px-3`}
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <Card
                type={item.type}
                img={item.image}
                info={item.info}
                link={item.link}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
 
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${currentSlide === idx * visibleSlides
                ? (isDark ? 'bg-blue-500' : 'bg-blue-600')
                : (isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400')
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;