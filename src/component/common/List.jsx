import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const List = ({ items }) => {
  const currentMode = useSelector((state) => state.mode.current);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Set the number of items per page

  // Calculate the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Render the current page's items */}
      {currentItems.map((item) => (
        <div
          key={item.id}
          className="projectbox transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10 p-2 sm:p-4 flex flex-col sm:flex-row items-center"
          onClick={() => window.open(item.link, '_blank')}
        >
          <div className="project-image flex-shrink-0 overflow-hidden">
            <img
              className="project-image-propp w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className="project-info mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left w-full sm:w-auto">
            <h3
              className="pro-h3-mobile text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2"
              style={{
                color: currentMode === 'Light' ? '#191919' : '#E9E9E9',
              }}
            >
              {item.title}
            </h3>
            <p
              className="pro-p-mobile text-xs sm:text-sm md:text-base mb-1"
              style={{
                color: currentMode === 'Light' ? '#191919' : '#E9E9E9',
              }}
            >
              {item.description}
            </p>
            <p
              className="pro-p-mobile text-xs sm:text-sm md:text-base"
              style={{
                color: currentMode === 'Light' ? '#191919' : '#E9E9E9',
              }}
            >
              <b>Skills: </b>
              {item.skills}
            </p>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      <div className="pagination mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`py-2 px-4 rounded-full ${
              currentPage === index + 1 ? 'bg-green-700 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default List;
