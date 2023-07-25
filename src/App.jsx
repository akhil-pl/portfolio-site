import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Mainbar from './components/Mainbar';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`flex flex-col ${darkMode ? 'dark' : ''}`}>
      <main className="flex-1 bg-slate-200 dark:bg-gray-700 lg:pl-0">
        <div className="hidden lg:flex">
          <aside className="w-3/12 sticky left-0 top-0 h-screen bg-gray-200">
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          </aside>
          <div className="w-9/12">
            <Mainbar />
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

export default App;
