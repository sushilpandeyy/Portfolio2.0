import React from 'react'
import '../App.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import assests from '../assets/all'
import { useSelector } from 'react-redux';
import {data} from '../../data/index'

const Bio = () => {

  const currentMode = useSelector((state) => state.mode.current);
  return (<div className='bioo' style={{
    backgroundColor: (currentMode === "Light") ? "white" : "#232323"
  }}>
    <div className="headimage">
        <img className='headimage-img' src={assests.headergif}/>
    </div>
    <div className="profilepic">
        <img className='profilepic-img' src={assests.profile}/>
    </div>
    <div className="space"></div>
    <div className="biodetails">
        <div className="bioname">
            <h1 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Sushil Pandey</h1>
            <p style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Passionate about Learning and Leading | Seeking Opportunities in Technology</p>
        </div>
        <div className="biowidget">
          <div className="widgets-image">
            <img src='https://media.licdn.com/dms/image/C4E0BAQH3nUDO57s78A/company-logo_100_100/0/1531936161449?e=1704326400&v=beta&t=SdN2FjxolzlkmOCswdVOgbu1XdG5-iK23NLSyBC1PoE' height='50px' width='50px'/>
          </div>
          <div className="widget-title">
            <h3 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Self-Employed</h3>
          </div>
        </div>
    </div>
    <div className="bio-buttons">
            <div className="connectbutton"><Link to={"https://linktr.ee/contact.sushil"}><Button variant="contained">Connect</Button></Link></div>
            <div className="resumebutton"><Link to={data[0].link}><Button variant="outlined">Resume</Button></Link></div>
    </div>
    </div>
  )
}

export default Bio