import React from 'react';

const View = () => {
  return (
    <>
      <div className="outer-view p-4 border rounded-lg bg-gray-100">
        <div className="view-head flex justify-between items-center">
          
          {/* Logo and Heading */}
          <div className="head-view-logo flex items-center space-x-4">
            <img
              className="view-sel-icon w-16 h-16 rounded-full object-cover"
              src="https://media.licdn.com/dms/image/C4D03AQFj1UEp1hibQA/profile-displayphoto-shrink_100_100/0/1662981447177?e=1703116800&v=beta&t=Ujw7V62UVI8laxyP-UPToac0VL6LcK1cCU0UKBekxy4"
              alt="Profile"
            />
            <h3 className="view-sel-head text-2xl font-semibold">HEY</h3>
          </div>

          {/* View Button */}
          <div className="head-view-btn">
            <button className="view-btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
              View
            </button>
          </div>
        </div>
        
        <div className="view-description mt-4"></div>
      </div>
    </>
  );
}

export default View;
