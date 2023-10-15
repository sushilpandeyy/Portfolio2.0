import React from 'react'
import Bio from './Bio'
import Featured from './Featured'
import Activity from './Activity'
import About from './common/About'
import Exp from "./Exp"
import Education from './Education'
import '../App.css'
import { useSelector } from 'react-redux';

const Layout = () => {
  const currentMode = useSelector((state) => state.mode.current);
  return (
   <>
   <div className="biobox" style={{
     backgroundColor: (currentMode === "Light") ? "white" : "#1B1F23"
   }}>
   <Bio/>
   </div>
   <div className="featurebox" 
   style={{
    backgroundColor: (currentMode === "Light") ? "white" : "#1B1F23"
  }}>
    <Featured/>
   </div>
   <div className="featurebox" 
   style={{
    backgroundColor: (currentMode === "Light") ? "white" : "#1B1F23"
  }}>
    <Activity/>
   </div>
   <div className="featurebox"
   style={{
    backgroundColor: (currentMode === "Light") ? "white" : "#1B1F23"
  }}>
    <About/>
   </div>
   <div className="featurebox" 
   style={{
    backgroundColor: (currentMode === "Light") ? "white" : "#1B1F23"
  }}>
    <Exp/>
   </div>
   <div className="featurebox"
   style={{
    backgroundColor: (currentMode === "Light") ? "white" : "#1B1F23"
  }}>
    <Education/>
   </div>
   <div className="space"></div>
   </>
  )
}

export default Layout