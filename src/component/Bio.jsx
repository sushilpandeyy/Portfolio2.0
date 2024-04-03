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
            }}>Full Stack Developer | Ex Myraa Technologies | Proficient in Next, MERN Stack, Typescript, AWS, Docker</p>
        </div>
        <div className="biowidget">
        
          <div className="widgets-image">
            <Link to={"https://skoop1.vercel.app"}><img src='https://res.cloudinary.com/djug8zfu7/image/upload/v1710962200/zng2ogv0tnab6mnoqtit.png' height='50px' width='50px'/></Link>
          </div>
          <div className="widget-title">
          <Link to={"https://skoop1.vercel.app"}> <h3 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Skoop</h3></Link>
          </div>
        </div>
    </div>
    <div className="bio-buttons">
            <div className="connectbutton"><Link to={"https://linktr.ee/contact.sushil"}><Button variant="contained">Connect</Button></Link></div>
            <div className="resumebutton"><Link to={"https://drive.google.com/file/d/1gPY2fjEthdYI9AWzWo4PdR4JaGG50hBE/view"}><Button variant="outlined">Resume</Button></Link></div>
    </div>
    </div>
  )
}

export default Bio