import React from 'react'
import {data} from "../../data"
import Card from './common/Card'
import { useSelector } from 'react-redux';

function createcard(contact){
return <Card 
      key={contact.id}
      type={contact.type}
      img={contact.image}
      info={contact.info}
      link={contact.link}
      />
}

const Featured = () => {
  const currentMode = useSelector((state) => state.mode.current);
  return (
    <div className="bioo">
        <h2 style={{
              color: (currentMode === "Light") ? "#191919" : "#E9E9E9"
            }}>Featured</h2>
        <div className='vertical-al'>
          <ul className="feat-card">
            {data.map(createcard)}
            </ul>
        </div>
    </div>
  )
}

export default Featured