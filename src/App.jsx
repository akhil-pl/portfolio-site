import React, {useState} from 'react';

import Sidebar from './components/Sidebar';
import Mainbar from './components/Mainbar';


function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`flex flex-col ${darkMode ? "dark" : ""}`}>
        <main className="flex-1 bg-slate-200 lg:pl-0 dark:bg-gray-700">
            <div className="hidden lg:flex">
            <aside className="w-3/10 bg-white dark:bg-gray-700">
                <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
            </aside>
            <div className="w-7/10">
                < Mainbar />
            </div>
            </div>
            <div className="lg:hidden">
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <div className="lg:hidden">
            <Mainbar />
            </div>
        </main>
        </div>
    );
  
}

export default App
