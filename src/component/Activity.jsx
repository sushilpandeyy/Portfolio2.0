import { useState } from 'react';
import Articles from './common/Articles';
import Certificate from '../component/common/Certificate.jsx';
import Projects from './common/Projects';
import Skills from './common/Skills';
import { useSelector } from 'react-redux';

function vity(toggle) {
    if (toggle === 'pro') {
        return <Projects />;
    } else if (toggle === 'art') {
        return <Articles />;
    } else if (toggle === 'cert') {
        return <Certificate />;
    } else if (toggle === 'skil') {
        return <Skills />;
    }
}

const Activity = () => {
    const [toggle, setToggle] = useState('pro');
    const currentMode = useSelector((state) => state.mode.current);

    return (
        <div 
            className={`p-6 rounded-lg border transition-colors duration-500 ${currentMode === "Light" ? "bg-white border-gray-200 text-gray-900" : "bg-gray-900 border-gray-700 text-gray-200"}`}
        >
            <h2 className={`text-3xl font-bold mb-6 ${currentMode === 'Light' ? 'text-gray-900' : 'text-white'}`}>
                Activity
            </h2>

            {/* Toggle Buttons */}
            <div className="flex flex-wrap justify-start gap-4 mb-6">
                <button
                    className={`py-2 px-4 rounded-full font-medium transition-all duration-300 transform ${toggle === 'pro' ? 'bg-green-700 text-white scale-110' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-800 text-gray-300'}`}
                    onClick={() => setToggle('pro')}
                >
                    Projects
                </button>
                <button
                    className={`py-2 px-4 rounded-full font-medium transition-all duration-300 transform ${toggle === 'art' ? 'bg-green-700 text-white scale-110' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-800 text-gray-300'}`}
                    onClick={() => setToggle('art')}
                >
                    Articles
                </button>
                <button
                    className={`py-2 px-4 rounded-full font-medium transition-all duration-300 transform ${toggle === 'cert' ? 'bg-green-700 text-white scale-110' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-800 text-gray-300'}`}
                    onClick={() => setToggle('cert')}
                >
                    Certificates
                </button>
                <button
                    className={`py-2 px-4 rounded-full font-medium transition-all duration-300 transform ${toggle === 'skil' ? 'bg-green-700 text-white scale-110' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-800 text-gray-300'}`}
                    onClick={() => setToggle('skil')}
                >
                    Skills
                </button>
            </div>

            {/* Section Content */}
            <div className="transition-opacity duration-500 ease-in-out">
                {vity(toggle)}
            </div>
        </div>
    );
};

export default Activity;
