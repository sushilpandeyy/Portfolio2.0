import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const List = ({ items }) => {
  const currentMode = useSelector((state) => state.mode.current);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const itemsPerPage = 3;
  const isDark = currentMode !== 'Light';

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setDisplayedItems(items.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, items]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    // Changed: Removed scrolling behavior
    setCurrentPage(pageNumber);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {displayedItems.map((item) => (
          <Link to={item.link} key={item.id}>
            <div className={`group p-4 rounded-xl transition-all duration-300
              ${isDark 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-50'} 
              border hover:shadow-lg hover:-translate-y-1
              ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden
                    transition-transform duration-300 group-hover:scale-105
                    ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <img
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                </div>

                <div className="flex-grow text-center sm:text-left">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300
                    ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base mb-3 transition-colors duration-300
                    ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  
                  <div className={`text-sm sm:text-base font-medium transition-colors duration-300
                    ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Skills:
                    </span>{' '}
                    {item.skills}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
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

export default List;