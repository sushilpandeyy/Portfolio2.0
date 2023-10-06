import { useState } from 'react'
import Header from "./component/Header"
import Footer from './component/Footer'
import Layout from './component/Layout'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
