import React from 'react'
import '../App.css'
import { Button } from '@mui/material'
const Bio = () => {
  return (<div className='bioo'>
    <div className="headimage">
        <img className='headimage-img' src='https://wallpaperaccess.com/full/2641074.gif'/>
    </div>
    <div className="profilepic">
        <img className='profilepic-img' src='https://media.licdn.com/dms/image/C4D03AQFj1UEp1hibQA/profile-displayphoto-shrink_200_200/0/1662981447177?e=1701907200&v=beta&t=nAQkppRVV8iJqW0zZU8g9WigAa04eZh58z0lNY1GJzI'/>
    </div>
    <div className="space"></div>
    <div className="biodetails">
        <div className="bioname">
            <h1>Sushil Pandey</h1>
            <p>Passionate about Learning and Leading | Seeking Opportunities in Technology</p>
        </div>
        <div className="biowidget">
          <div className="widgets-image">
            <img src='https://media.licdn.com/dms/image/C4E0BAQH3nUDO57s78A/company-logo_100_100/0/1531936161449?e=1704326400&v=beta&t=SdN2FjxolzlkmOCswdVOgbu1XdG5-iK23NLSyBC1PoE' height='50px' width='50px'/>
          </div>
          <div className="widget-title">
            <h3>Self-Employed</h3>
          </div>
        </div>
    </div>
    <div className="bio-buttons">
            <div className="connectbutton"><Button variant="contained">Connect</Button></div>
            <div className="resumebutton"><Button variant="outlined">Resume</Button></div>
    </div>
    </div>
  )
}

export default Bio