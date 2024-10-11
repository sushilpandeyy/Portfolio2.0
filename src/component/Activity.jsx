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
        <div className="p-6 rounded-lg border" style={{ backgroundColor: '#101826', borderColor: currentMode === "Light" ? "gray-200" : "gray-700" }}>
            <h2 className="text-3xl font-bold mb-6 text-white">
                Activity
            </h2>
            <div className="flex space-x-4 mb-6">
                <button
                    className={`py-2 px-4 rounded-full font-medium ${toggle === 'pro' ? 'bg-green-700 text-white' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-900 text-gray-300'}`}
                    onClick={() => setToggle('pro')}
                >
                    Projects
                </button>
                <button
                    className={`py-2 px-4 rounded-full font-medium ${toggle === 'art' ? 'bg-green-700 text-white' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-900 text-gray-300'}`}
                    onClick={() => setToggle('art')}
                >
                    Articles
                </button>
                <button
                    className={`py-2 px-4 rounded-full font-medium ${toggle === 'cert' ? 'bg-green-700 text-white' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-900 text-gray-300'}`}
                    onClick={() => setToggle('cert')}
                >
                    Certificates
                </button>
                <button
                    className={`py-2 px-4 rounded-full font-medium ${toggle === 'skil' ? 'bg-green-700 text-white' : currentMode === 'Light' ? 'bg-white text-gray-600' : 'bg-gray-900 text-gray-300'}`}
                    onClick={() => setToggle('skil')}
                >
                    Skills
                </button>
            </div>
            <div>
                {vity(toggle)}
            </div>
        </div>
    );
};

export default Activity;
