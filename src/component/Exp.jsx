import React, { useState, useEffect } from 'react';
import { exp } from "../../data/index";
import Liste from './common/Liste';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Exp = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const itemsPerPage = 4;

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setDisplayedItems(exp.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);

  const totalPages = Math.ceil(exp.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    // Remove the window.scrollTo call to prevent auto-scrolling
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`w-full py-8 px-6 rounded-2xl shadow-xl transition-colors duration-300
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
      
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
          Experience
        </h2>
      </div>

      <div className="space-y-4">
        {displayedItems.length > 0 ? (
          displayedItems.map((info) => (
            <Liste
              key={info.id}
              title={info.title}
              org={info.org}
              dur={info.dur}
              info={info.info}
              skill={info.skill}
              img={info.img}
              location={info.location}
              type={info.type}
              // Support both single promotion and promotions array
              promotion={info.promotion}
              promotions={info.promotions}
            />
          ))
        ) : (
          <p className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            No items found
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-colors duration-300
              ${isDark ? 'hover:bg-gray-800 disabled:bg-gray-800' : 'hover:bg-gray-100 disabled:bg-gray-100'}
              ${isDark ? 'text-gray-400 disabled:text-gray-600' : 'text-gray-600 disabled:text-gray-400'}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`w-8 h-8 rounded-lg transition-all duration-300
                ${currentPage === idx + 1 
                  ? (isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white')
                  : (isDark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100')}`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-colors duration-300
              ${isDark ? 'hover:bg-gray-800 disabled:bg-gray-800' : 'hover:bg-gray-100 disabled:bg-gray-100'}
              ${isDark ? 'text-gray-400 disabled:text-gray-600' : 'text-gray-600 disabled:text-gray-400'}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Exp;