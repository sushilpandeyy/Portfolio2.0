import React from 'react'
import '../App.css'
import { Button } from '@mui/material'
const Bio = () => {
  return (<div className='bioo'>
    <div className="headimage"></div>
    <div className="profilepic"></div>
    <div className="biodetails">
        <div className="bioname">
            <h1>Sushil Pandey</h1>
            <p>Passionate about Learning and Leading | Seeking Opportunities in Technology</p>
        </div>
        <div className="biowidget">
        WIDGET</div>
    </div>
    <div className="bio-buttons">
            <div className="connectbutton"><Button variant="contained">Connect</Button></div>
            <div className="resumebutton"><Button variant="outlined">Resume</Button></div>
    </div>
    </div>
  )
}

export default Bio