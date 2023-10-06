import React from 'react'
import Bio from './Bio'
import Featured from './Featured'
import Activity from './Activity'
import About from './common/About'
import Exp from "./Exp"
import Education from './Education'
import '../App.css'
const Layout = () => {
  return (
   <>
   <div className="biobox">
   <Bio/>
   </div>
   <div className="featurebox">
    <Featured/>
   </div>
   <div className="featurebox">
    <Activity/>
   </div>
   <div className="featurebox">
    <About/>
   </div>
   <div className="featurebox">
    <Exp/>
   </div>
   <div className="featurebox">
    <Education/>
   </div>
   </>
  )
}

export default Layout