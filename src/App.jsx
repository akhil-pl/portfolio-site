import React, {useState} from 'react';

import Sidebar from './components/Sidebar';
import Mainbar from './components/Mainbar';


function App() {
    const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "" }>
    <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700 '>
        < Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        < Mainbar />
    </main>
    </div>
  )
}

export default App
