import React from 'react';
import Bio from './Bio';
import Featured from './Featured';
import Activity from './Activity';
import About from './common/About';
import Exp from './Exp';
import Education from './Education';
import '../App.css';
import { useSelector } from 'react-redux';

const Layout = () => {
  const currentMode = useSelector((state) => state.mode.current);
  
  const containerClasses = currentMode === 'Light' ? 'bg-white' : 'bg-gray-900';

  return (
    <>
      <div className={`biobox p-6 rounded-lg border ${containerClasses} border-gray-300`}>
        <Bio />
      </div>
      
      <div className={`featurebox p-6 rounded-lg border mt-6 ${containerClasses} border-gray-300`}>
        <Featured />
      </div>
      
      <div className={`featurebox p-6 rounded-lg border mt-6 ${containerClasses} border-gray-300`}>
        <Activity />
      </div>
      
      <div className={`featurebox p-6 rounded-lg border mt-6 ${containerClasses} border-gray-300`}>
        <About />
      </div>
      
      <div className={`featurebox p-6 rounded-lg border mt-6 ${containerClasses} border-gray-300`}>
        <Exp />
      </div>
      
      <div className={`featurebox p-6 rounded-lg border mt-6 ${containerClasses} border-gray-300`}>
        <Education />
      </div>
      
      <div className="space h-12"></div>
    </>
  );
}

export default Layout;
