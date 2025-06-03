import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Code, User, Trophy, Camera, MessageCircle, BookOpen, X, Github, Linkedin, Mail, Phone, ArrowLeft } from 'lucide-react';

const App = () => {
  const [currentScene, setCurrentScene] = useState('menu');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [missionTitle, setMissionTitle] = useState('');
  const [showMissionTitle, setShowMissionTitle] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [playAudio, setPlayAudio] = useState(false);

  // Menu items configuration matching GTA style
  const menuItems = [
    { id: 'projects', label: 'START JOURNEY', mission: 'Loading Portfolio...' },
    { id: 'resume', label: 'RESUME', mission: 'Loading Experience...' },
    { id: 'skills', label: 'STATS', mission: 'Loading Skills...' },
    { id: 'gallery', label: 'MAP', mission: 'Loading Gallery...' },
    { id: 'contact', label: 'BRIEF', mission: 'Loading Contact...' },
    { id: 'blog', label: 'OPTIONS', mission: 'Loading Blog...' },
    { id: 'exit', label: 'QUIT GAME', mission: 'Thanks for visiting!' }
  ];

  // Sound effect simulation
  const playSound = (type) => {
    if (!playAudio) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      const playBeep = (frequency, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      };

      switch(type) {
        case 'hover':
          playBeep(600, 0.1);
          break;
        case 'select':
          playBeep(800, 0.15);
          setTimeout(() => playBeep(1000, 0.1), 150);
          break;
        case 'back':
          playBeep(400, 0.2);
          break;
      }
    } catch (e) {
      console.log('Audio not available');
    }
  };

  const handleMenuSelect = (item) => {
    if (isTransitioning) return;
    
    playSound('select');
    
    if (item.id === 'exit') {
      setMissionTitle('Thanks for visiting Grove Street Portfolio!');
      setShowMissionTitle(true);
      setTimeout(() => {
        alert('Thanks for checking out my portfolio! - Sushil Andreas');
      }, 2000);
      return;
    }

    setIsTransitioning(true);
    setMissionTitle(item.mission);
    
    setTimeout(() => {
      setShowMissionTitle(true);
    }, 300);
    
    setTimeout(() => {
      setShowMissionTitle(false);
      setCurrentScene(item.id);
      setIsTransitioning(false);
    }, 1800);
  };

  const handleBackToMenu = () => {
    playSound('back');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentScene('menu');
      setIsTransitioning(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (currentScene !== 'menu' || isTransitioning) return;
    
    switch(e.key) {
      case 'ArrowUp':
        setSelectedMenuItem(prev => prev > 0 ? prev - 1 : menuItems.length - 1);
        playSound('hover');
        break;
      case 'ArrowDown':
        setSelectedMenuItem(prev => prev < menuItems.length - 1 ? prev + 1 : 0);
        playSound('hover');
        break;
      case 'Enter':
        handleMenuSelect(menuItems[selectedMenuItem]);
        break;
      case 'Escape':
        if (currentScene !== 'menu') {
          handleBackToMenu();
        }
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentScene, selectedMenuItem, isTransitioning]);

  // Scene components
  const ProjectsScene = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Vinewood Hills Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-64 bg-gradient-to-bl from-yellow-600/30 via-green-600/20 to-transparent"></div>
        <div className="absolute top-12 right-8 text-6xl font-black text-yellow-600/40 transform rotate-12">
          VINEWOOD
        </div>
      </div>
      
      <div className="relative z-10 p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-12 text-gray-300 tracking-widest" style={{fontFamily: 'serif'}}>
            Project Showcase
          </h1>
          
          <div className="grid gap-8">
            {[
              { name: 'E-Commerce Platform', tech: 'React • Node.js • MongoDB', desc: 'Full-stack shopping experience with payment integration', status: 'COMPLETED' },
              { name: 'Social Media Dashboard', tech: 'Vue.js • Firebase • Analytics', desc: 'Real-time analytics and content management system', status: 'COMPLETED' },
              { name: 'Mobile Game Application', tech: 'React Native • Unity • AR', desc: 'Cross-platform arcade-style mobile gaming experience', status: 'IN PROGRESS' },
              { name: 'AI Chatbot Assistant', tech: 'Python • TensorFlow • NLP', desc: 'Natural language processing chatbot with learning capabilities', status: 'COMPLETED' }
            ].map((project, idx) => (
              <div key={idx} className="bg-black/80 border border-gray-600 p-6 hover:border-gray-400 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-300">{project.name}</h3>
                  <span className={`px-3 py-1 text-xs font-bold ${
                    project.status === 'COMPLETED' ? 'bg-green-800 text-green-200' : 'bg-yellow-800 text-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-500 mb-3 font-mono text-sm">{project.tech}</p>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <button className="bg-gray-700 text-gray-300 px-6 py-2 font-bold hover:bg-gray-600 transition-colors">
                  VIEW PROJECT
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ResumeScene = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-64 bg-gradient-to-bl from-yellow-600/30 via-green-600/20 to-transparent"></div>
        <div className="absolute top-12 right-8 text-6xl font-black text-yellow-600/40 transform rotate-12">
          VINEWOOD
        </div>
      </div>
      
      <div className="relative z-10 p-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-black mb-12 text-gray-300 tracking-widest" style={{fontFamily: 'serif'}}>
            Resume
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-black/80 border border-gray-600 p-6">
                <h2 className="text-2xl font-bold text-gray-300 mb-6 tracking-wide">EXPERIENCE</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-gray-600 pl-4">
                    <h3 className="text-lg font-bold text-gray-300">Full Stack Developer Intern</h3>
                    <p className="text-gray-500 text-sm">TechCorp Solutions • 2024</p>
                    <p className="text-gray-400 mt-2">Built responsive web applications using modern frameworks and cloud technologies</p>
                  </div>
                  <div className="border-l-2 border-gray-600 pl-4">
                    <h3 className="text-lg font-bold text-gray-300">Frontend Developer</h3>
                    <p className="text-gray-500 text-sm">StartupXYZ • 2023</p>
                    <p className="text-gray-400 mt-2">Created user interfaces for mobile and web platforms with focus on UX/UI</p>
                  </div>
                  <div className="border-l-2 border-gray-600 pl-4">
                    <h3 className="text-lg font-bold text-gray-300">Web Development Freelancer</h3>
                    <p className="text-gray-500 text-sm">Self-Employed • 2022-2023</p>
                    <p className="text-gray-400 mt-2">Delivered custom web solutions for small businesses and startups</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/80 border border-gray-600 p-6">
                <h2 className="text-2xl font-bold text-gray-300 mb-6 tracking-wide">EDUCATION</h2>
                <div className="border-l-2 border-gray-600 pl-4">
                  <h3 className="text-lg font-bold text-gray-300">Computer Science Engineering</h3>
                  <p className="text-gray-500 text-sm">University of Technology • 2020-2024</p>
                  <p className="text-gray-400 mt-2">Bachelor's Degree with focus on Software Engineering and AI</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-black/80 border border-gray-600 p-6">
                <h2 className="text-2xl font-bold text-gray-300 mb-6 tracking-wide">TECH STACK</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-400 mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'SCSS'].map((tech, idx) => (
                        <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 text-sm font-mono border border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-400 mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Python', 'Express', 'Django', 'MongoDB', 'PostgreSQL'].map((tech, idx) => (
                        <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 text-sm font-mono border border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-400 mb-2">Tools & Cloud</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'].map((tech, idx) => (
                        <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 text-sm font-mono border border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/80 border border-gray-600 p-6">
                <h2 className="text-2xl font-bold text-gray-300 mb-6 tracking-wide">ACHIEVEMENTS</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600"></div>
                    <span className="text-gray-400">Winner - University Hackathon 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600"></div>
                    <span className="text-gray-400">Open Source Contributor - 50+ repos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600"></div>
                    <span className="text-gray-400">AWS Certified Developer Associate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsScene = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-64 bg-gradient-to-bl from-yellow-600/30 via-green-600/20 to-transparent"></div>
        <div className="absolute top-12 right-8 text-6xl font-black text-yellow-600/40 transform rotate-12">
          VINEWOOD
        </div>
      </div>
      
      <div className="relative z-10 p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-12 text-gray-300 tracking-widest" style={{fontFamily: 'serif'}}>
            Stats
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'JavaScript/TypeScript', level: 92 },
              { skill: 'React & Vue.js', level: 88 },
              { skill: 'Node.js & Express', level: 85 },
              { skill: 'Python & Django', level: 78 },
              { skill: 'Database Design', level: 80 },
              { skill: 'Cloud & DevOps', level: 75 },
              { skill: 'UI/UX Design', level: 82 },
              { skill: 'Mobile Development', level: 70 }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/80 border border-gray-600 p-6">
                <div className="flex justify-between mb-3">
                  <span className="font-bold text-gray-300">{item.skill}</span>
                  <span className="text-gray-500 font-mono">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 border border-gray-700">
                  <div 
                    className="bg-gradient-to-r from-gray-600 to-gray-500 h-full transition-all duration-2000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-black/80 border border-gray-600 p-8">
            <h2 className="text-2xl font-bold text-gray-300 mb-6 tracking-wide">CODING ACTIVITY</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-gray-300 mb-2">150+</div>
                <div className="text-gray-500">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-300 mb-2">2.5K+</div>
                <div className="text-gray-500">GitHub Commits</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-300 mb-2">50+</div>
                <div className="text-gray-500">Open Source Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactScene = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-64 bg-gradient-to-bl from-yellow-600/30 via-green-600/20 to-transparent"></div>
        <div className="absolute top-12 right-8 text-6xl font-black text-yellow-600/40 transform rotate-12">
          VINEWOOD
        </div>
      </div>
      
      <div className="relative z-10 p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-12 text-gray-300 tracking-widest" style={{fontFamily: 'serif'}}>
            Brief
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black/80 border border-gray-600 p-8">
              <h2 className="text-2xl font-bold text-gray-300 mb-8 tracking-wide">GET IN TOUCH</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 border border-gray-700 hover:border-gray-500 transition-colors">
                  <Mail className="text-gray-500" size={20} />
                  <span className="text-gray-300">sushil.andreas@example.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 border border-gray-700 hover:border-gray-500 transition-colors">
                  <Phone className="text-gray-500" size={20} />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4 p-4 border border-gray-700 hover:border-gray-500 transition-colors">
                  <Github className="text-gray-500" size={20} />
                  <span className="text-gray-300">github.com/sushil-andreas</span>
                </div>
                <div className="flex items-center space-x-4 p-4 border border-gray-700 hover:border-gray-500 transition-colors">
                  <Linkedin className="text-gray-500" size={20} />
                  <span className="text-gray-300">linkedin.com/in/sushil-andreas</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/80 border border-gray-600 p-8">
              <h2 className="text-2xl font-bold text-gray-300 mb-8 tracking-wide">SEND MESSAGE</h2>
              <div className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black border border-gray-600 p-4 text-gray-300 placeholder-gray-500 focus:border-gray-400 outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black border border-gray-600 p-4 text-gray-300 placeholder-gray-500 focus:border-gray-400 outline-none transition-colors"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full bg-black border border-gray-600 p-4 text-gray-300 placeholder-gray-500 focus:border-gray-400 outline-none transition-colors resize-none"
                ></textarea>
                <button className="w-full bg-gray-800 border border-gray-600 text-gray-300 py-4 font-bold hover:bg-gray-700 hover:border-gray-500 transition-colors">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-black/80 border border-gray-600 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-300 mb-4 tracking-wide">LOCATION</h2>
            <p className="text-gray-400">Based in Sultanpur, Uttar Pradesh, India</p>
            <p className="text-gray-500 mt-2">Available for Remote Work & Freelance Projects</p>
          </div>
        </div>
      </div>
    </div>
  );

  const MainMenu = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Vinewood Hills Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-64 bg-gradient-to-bl from-yellow-600/40 via-green-600/30 to-transparent"></div>
        <div className="absolute top-12 right-8 text-6xl font-black text-yellow-600/50 transform rotate-12" style={{fontFamily: 'serif'}}>
          VINEWOOD
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Menu Title */}
      <div className="absolute top-12 left-12">
        <h1 className="text-4xl font-black text-gray-300 tracking-widest" style={{fontFamily: 'serif'}}>
          MAIN MENU
        </h1>
      </div>

      {/* Menu Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-200 ${
                  index === selectedMenuItem
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => handleMenuSelect(item)}
                onMouseEnter={() => {
                  setSelectedMenuItem(index);
                  playSound('hover');
                }}
              >
                <div className="flex items-center space-x-4">
                  {index === selectedMenuItem && (
                    <div className="text-white text-xl">✦</div>
                  )}
                  <span className="font-bold tracking-wider text-lg" style={{fontFamily: 'serif'}}>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center">
        <div className="text-xs text-gray-600">
          <p>Use ↑↓ arrows to navigate • Press Enter to select • ESC to go back</p>
        </div>
        <div className="text-xs text-gray-600">
          <button
            onClick={() => setPlayAudio(!playAudio)}
            className={`px-3 py-1 font-bold transition-colors ${
              playAudio 
                ? 'text-gray-300 bg-gray-800' 
                : 'text-gray-600 bg-gray-900'
            }`}
          >
            SOUND: {playAudio ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Bottom right watermark */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-700 font-mono">
        SUSHIL.ANDREAS.PORTFOLIO
      </div>
    </div>
  );

  // Render current scene
  const renderScene = () => {
    switch(currentScene) {
      case 'projects': return <ProjectsScene />;
      case 'resume': return <ResumeScene />;
      case 'skills': return <SkillsScene />;
      case 'contact': return <ContactScene />;
      case 'gallery': return <ProjectsScene />; // Placeholder
      case 'blog': return <ResumeScene />; // Placeholder
      default: return <MainMenu />;
    }
  };

  return (
    <div className="relative bg-black min-h-screen">
      {/* Transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-300 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 font-mono">Loading...</p>
          </div>
        </div>
      )}

      {/* Mission title overlay */}
      {showMissionTitle && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-gray-300 mb-8 animate-pulse tracking-widest" style={{fontFamily: 'serif'}}>
              {missionTitle}
            </h1>
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back button for non-menu scenes */}
      {currentScene !== 'menu' && !isTransitioning && (
        <button
          onClick={handleBackToMenu}
          className="fixed top-8 left-8 z-40 bg-black/80 border border-gray-600 text-gray-300 px-6 py-3 font-bold hover:bg-gray-800 hover:border-gray-500 transition-colors flex items-center space-x-2"
        >
          <ArrowLeft size={16} />
          <span>BACK</span>
        </button>
      )}

      {/* Main content */}
      {renderScene()}
    </div>
  );
};

export default App;