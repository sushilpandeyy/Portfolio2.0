import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { languages } from "../../data/index";
import '../App.css';
import { useSelector } from 'react-redux';

const Loading = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode === 'Dark';
 
  const animationDuration = {
    firstAndLast: 900,  
    normal: 300         
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLanguageIndex >= languages.length - 1) {
        setCurrentLanguageIndex(0);
      } else {
        setCurrentLanguageIndex(prevIndex => prevIndex + 1);
      }
    },  
    currentLanguageIndex === 0 || currentLanguageIndex === languages.length - 1 
      ? animationDuration.firstAndLast 
      : animationDuration.normal
    );

    return () => clearTimeout(timer);
  }, [currentLanguageIndex]);

  const currentLanguage = languages[currentLanguageIndex];
 
  const boxLoadStyle = {
    backgroundColor: isDark ? "#1B1F23" : "#FFFFFF",
    color: isDark ? "#FFFFFF" : "#000000",
  };

  return (
    <div className="boxload" style={boxLoadStyle}>
      <motion.div
        key={currentLanguageIndex}  
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-4xl font-normal">{currentLanguage.message}</h2>
      </motion.div>
    </div>
  );
};

export default Loading;