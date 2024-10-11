import React, { useState, useEffect } from 'react';
import { exp } from "../../data/index";
import Liste from './common/Liste';
import { useSelector } from 'react-redux';

const Exp = () => {
  const currentMode = useSelector((state) => state.mode.current);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [currentItems, setCurrentItems] = useState([]);

  // Get current items for the page
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const newItems = exp.slice(indexOfFirstItem, indexOfLastItem);

    console.log("Current Page: ", currentPage);  // Debugging: Check current page number
    console.log("Current Items: ", newItems);  // Debugging: Check the items rendered

    setCurrentItems(newItems);
  }, [currentPage]); // Effect depends on currentPage

  // Calculate total pages
  const totalPages = Math.ceil(exp.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    console.log("Changing to Page: ", pageNumber);  // Debugging: Track page changes
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`bioo p-6 rounded-lg ${currentMode === 'Light' ? 'bg-white' : 'bg-gray-900'}`}>
      <h2 className={`text-3xl font-semibold mb-4 ${currentMode === 'Light' ? 'text-gray-900' : 'text-gray-200'}`}>
        Experience
      </h2>

      {/* Display current page items */}
      {currentItems.length > 0 ? (
        currentItems.map((info) => (
          <Liste
            key={info.id} // Ensure the id is unique
            title={info.title}
            org={info.org}
            dur={info.dur}
            info={info.info}
            skill={info.skill}
            img={info.img}
          />
        ))
      ) : (
        <p>No items found</p> // Fallback in case the list is empty
      )}

      {/* Pagination controls */}
      <div className="pagination mt-4 flex justify-center space-x-2">
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

export default Exp;
