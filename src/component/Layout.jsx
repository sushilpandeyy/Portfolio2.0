import React from 'react'
import Bio from './Bio'
import Featured from './Featured'
import Activity from './Activity'
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
   </>
  )
}

export default Layout