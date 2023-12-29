import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { languages } from "../../data/index";
import '../App.css'

const Loading = () => {
   
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLanguageIndex((prevIndex) => prevIndex + 1);
    }, getTotalDuration(currentLanguageIndex));

    return () => clearTimeout(timer);
  }, [currentLanguageIndex]);

  const getTotalDuration = () => {
    let totalDuration = 0;
    for (let i = 0; i <= currentLanguageIndex; i++) {
      if (i === 0 || i === languages.length - 1) {
        totalDuration = 900;
      } else {
        totalDuration = 200;
      }
    }
    return totalDuration;
  };

  const currentLanguage = languages[currentLanguageIndex % languages.length];

  return (
    <div className="boxload">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="text-4xl font-normal">{currentLanguage.message}</h2>
      </motion.div>

    </div>
  );
};

export default Loading;