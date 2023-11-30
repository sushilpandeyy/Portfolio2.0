import {useState} from 'react'
import Articles from './common/Articles'
import Certificate from '../component/common/Certificate.jsx'
import Projects from './common/Projects'
import Skills from './common/Skills'
import { useSelector } from 'react-redux';

function vity(toggle){
    if(toggle=='pro'){
        return <Projects/>
    }
    else if(toggle=='art'){
        return <Articles/>
    }
    else if(toggle=='cert'){
        return <Certificate/>
    }
    else if(toggle=='skil'){
        return <Skills/>
    }
}


const Activity = () => {
    const [toggle, settogle]=useState('pro')
    const currentMode = useSelector((state) => state.mode.current);
    


  return (
    <div className="bioo">
        <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Activity</h2>
      <div className="act-button">
        <div className="toggle" style={{
        backgroundColor: toggle === 'pro' ? "#1f754f" : (currentMode === "Light") ? "white" : "#1B1F23",
        color: toggle === 'pro' ? "#ffffff" : (currentMode === "Light") ? "#666666" : "#E9E9E9",
         }} onClick={() => settogle('pro')}>Projects</div>
        <div className="toggle" style={{
         backgroundColor: toggle === 'art' ? "#1f754f" : (currentMode === "Light") ? "white" : "#1B1F23",
         color: toggle === 'art' ? "#ffffff" : (currentMode === "Light") ? "#666666" : "#E9E9E9",
          }} onClick={() => settogle('art')}>Articles</div>
        <div className="toggle" style={{
          backgroundColor: (toggle === 'cert')?"#1f754f":(currentMode === "Light") ? "white" : "#1B1F23",
          color: toggle === 'cert' ? "#ffffff" : (currentMode === "Light") ? "#666666" : "#E9E9E9",
         }} onClick={() => settogle('cert')}>Certificates</div>
        <div className="toggle" style={{
          backgroundColor: toggle === 'skil' ?"#1f754f":(currentMode === "Light") ? "white" : "#1B1F23",
          color: toggle === 'skil' ? "#ffffff" : (currentMode === "Light") ? "#666666" : "#E9E9E9",
       }} onClick={() => settogle('skil')}>Skills</div>
    </div>
    {vity(toggle)}
    </div>
  )
}

export default Activity