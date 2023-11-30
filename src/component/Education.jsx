import React from 'react'
import Liste from './common/Liste'
import { useSelector } from 'react-redux';

const Education = () => {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className="bioo">
    <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Education</h2>
    <Liste
    key="srm"
    org="Bachelor of Technology - B.Tech, Computer Science"
    title="SRM University AP"
    dur = "2022-2026"
    info=""
    skill=""
    img="https://media.licdn.com/dms/image/C4D0BAQFVkDMh7oXtqw/company-logo_100_100/0/1521545868930?e=1704931200&v=beta&t=ZnrhoL6y9w8yRLlxW0wihb1k9ID_Q5GaZOiKpxH8p8I"
    />
    </div>
  )
}

export default Education