import React from 'react';
import { useSelector } from 'react-redux';
import { Code2, GraduationCap, Laptop } from 'lucide-react';

const About = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: "Third-year Computer Science Engineering student"
    },
    {
      icon: <Laptop className="w-5 h-5" />,
      text: "Full Stack Developer with internship experience"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      text: "Proficient in various Full Stack technologies"
    }
  ];

  return (
    <div className={`w-full rounded-xl shadow-lg transition-colors duration-300
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <h2 className={`text-2xl font-bold transition-colors duration-300
            ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`ml-4 flex-grow h-px transition-colors duration-300
            ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Introduction */}
          <p className={`text-lg leading-relaxed transition-colors duration-300
            ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Hello! I'm Sushil Pandey, a passionate developer dedicated to delivering innovative solutions 
            in the tech industry. I combine technical expertise with creative problem-solving to build 
            impactful digital experiences.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {highlights.map((highlight, index) => (
              <div key={index} className={`p-4 rounded-lg transition-all duration-300
                ${isDark 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-50 hover:bg-gray-100'}`}>
                <div className="flex items-center gap-3">
                  <div className={`transition-colors duration-300
                    ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {highlight.icon}
                  </div>
                  <p className={`text-sm font-medium transition-colors duration-300
                    ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {highlight.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;