import React from 'react'
import data from "../../data"
import Card from './Card'

function createcard(contact){
return <Card 
      key={contact.id}
      type={contact.type}
      img={contact.image}
      info={contact.info}
      />
}

const Featured = () => {
  return (
    <div className="bioo">
        <h2>Featured</h2>
        <div className="feat-card">
            {data.map(createcard)}
        </div>
    </div>
  )
}

export default Featured