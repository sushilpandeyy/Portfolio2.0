import { useState } from 'react'
import Header from "./component/Header"
import Footer from './component/Footer'
import Layout from './component/Layout'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
  const currentMode = useSelector((state) => state.mode.current);

  return (
    <div className='fullmain' style={{
      backgroundColor: (currentMode === "Light") ? "white" : "#1B1F23"
    }}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
