import React from 'react'
import { Cert } from '../../../data'
import Listc from './Listc'
function add(info){
  return <Listc 
      key={info.id}
      title={info.title}
      img={info.img}
      org={info.org}
      skills={info.skills}
      cred={info.Cred}
      date={info.date}
      link={info.link}
  />
}

const Certificate = () => {
  return (
    <>
    {Cert.map(add)}
    </>
  )
}

export default Certificate