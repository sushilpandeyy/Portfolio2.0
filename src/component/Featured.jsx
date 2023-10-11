import React from 'react'
import {data} from "../../data"
import Card from './common/Card'

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
  return (
    <div className="bioo">
        <h2>Featured</h2>
        <div className='vertical-al'>
          <ul className="feat-card">
            {data.map(createcard)}
            </ul>
        </div>
    </div>
  )
}

export default Featured