import {useState} from 'react'

const Activity = () => {
    const [toggle, settogle]=useState('pro')
  return (
    <div className="bioo">
        <h2>Activity</h2>
      <div className="act-button">
        <div className="toggle" style={{
        backgroundColor: toggle === 'pro' ? "#1f754f" : "#ffffff",
        color: toggle === 'pro' ? "#ffffff" : "#000000"
         }} onClick={() => settogle('pro')}>Projects</div>
        <div className="toggle" style={{
         backgroundColor: toggle === 'art' ? "#1f754f" : "#ffffff",
         color: toggle === 'art' ? "#ffffff" : "#000000"
          }} onClick={() => settogle('art')}>Articles</div>
        <div className="toggle" style={{
          backgroundColor: toggle === 'cert' ? "#1f754f" : "#ffffff",
          color: toggle === 'cert' ? "#ffffff" : "#000000"
         }} onClick={() => settogle('cert')}>Certificates</div>
        <div className="toggle" style={{
          backgroundColor: toggle === 'skil' ? "#1f754f" : "#ffffff",
          color: toggle === 'skil' ? "#ffffff" : "#000000"
       }} onClick={() => settogle('skil')}>Skills</div>
    </div>
    

    </div>
  )
}

export default Activity