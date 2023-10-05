import React from 'react'
import Bio from './Bio'
import Featured from './Featured'
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
   </>
  )
}

export default Layout