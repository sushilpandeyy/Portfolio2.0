import { useEffect, useState } from 'react';
import Header from "./component/Header";
import Footer from './component/Footer';
import Layout from './component/Layout';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './component/Loading';

function App() {
  const currentMode = useSelector((state) => state.mode.current);
  const [loading, setloader] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(() => {
      setloader(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply background color to the entire document body
    document.body.style.backgroundColor = (currentMode === "Light") ? "#F4F2EE" : "#1B1F23";
  }, [currentMode]);

  return (
    (loading)?
    <div className='fullmainload' style={{
      backgroundColor: (currentMode === "Light") ? "#F4F2EE" : "#1B1F23"
    }}>
      <Loading />
    </div> :
    <>
      <div className='fullmain' style={{
        backgroundColor: (currentMode === "Light") ? "#F4F2EE" : "#1B1F23",
        minHeight: "100vh" // Ensure the div covers the entire viewport height
      }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;