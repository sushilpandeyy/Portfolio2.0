import React, { useState, useRef } from 'react';
import { data } from "../../data";
import Card from './common/Card';
import { useSelector } from 'react-redux';

// A utility function to handle card rendering
function createcard(contact) {
  return (
    <div key={contact.id} className="carousel-item">
      <Card
        type={contact.type}
        img={contact.image}
        info={contact.info}
        link={contact.link}
      />
    </div>
  );
}

const Featured = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = data.length;
  const visibleSlides = 3; // Number of visible slides (can adjust for responsive)

  // Variables to track touch start position and swipe distance
  const startX = useRef(0);
  const moveX = useRef(0);

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - visibleSlides : prev - 1));
  };

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + visibleSlides >= totalSlides ? 0 : prev + 1));
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    moveX.current = e.touches[0].clientX;
  };

  // Handle touch end to determine swipe direction
  const handleTouchEnd = () => {
    const swipeDistance = startX.current - moveX.current;
    const minSwipeDistance = 50; // Minimum swipe distance to trigger a slide

    if (swipeDistance > minSwipeDistance) {
      nextSlide(); // Swipe left to move to the next slide
    } else if (swipeDistance < -minSwipeDistance) {
      prevSlide(); // Swipe right to move to the previous slide
    }
  };

  return (
    <div
      className={`p-6 rounded-lg border overflow-visible relative ${currentMode === 'Light' ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'}`}
    >
      <h2 className={`text-3xl font-semibold mb-4 ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
        Featured
      </h2>

      <div
        className="carousel-container relative overflow-hidden"
        onTouchStart={handleTouchStart}  // Touch start event
        onTouchMove={handleTouchMove}    // Touch move event
        onTouchEnd={handleTouchEnd}      // Touch end event
      >
        {/* Carousel Items */}
        <div
          className="carousel-inner flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
            width: `${(totalSlides / visibleSlides) * 100}%`,
          }}
        >
          {data.map(createcard)}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Featured;
