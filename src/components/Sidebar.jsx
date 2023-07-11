import React from 'react';
import Typed from 'react-typed';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import pic from "../Images/akhil.jpg";
import resumePDF from "../Files/akhil.pdf";

function Sidebar(props) {

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'akhil.pdf';
        link.click();
      };


  return (
    
    <section className="min-h-screen lg:bg-gray-800">
        <nav className=' px-5 pt-10 pb-5 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons dark:text-yellow-50 lg:text-yellow-50'>Hello World!</h1>            <ul className=' flex items-center'>
                <li>
                    <p className=' block dark:hidden lg:text-yellow-50'>Dark Mode</p>
                    <p className=' hidden dark:block text-yellow-50'>Light Mode</p>
                </li>
                <li>
                    <BsFillMoonStarsFill onClick={() => props.setDarkMode(!props.darkMode) } className=' cursor-pointer text-2xl dark:text-yellow-50 ' />
                </li>
                <li>
                    <button
                        className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8"
                        onClick={handleResumeDownload}
                    >
                        Resume
                    </button>
                </li>
            </ul>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 md:text-left lg:flex lg:flex-wrap lg:justify-end">
            <div className='flex items-center justify-end'>
                <div className=' text-right px-10'>
                    <h2 className=' text-5xl py-2 text-teal-600 font-extrabold md:text-6xl lg:text-7xl'>
                        AKHIL<br></br>P L
                    </h2>
                    <div>
                        <h3 className=' font-burtons text-2xl py-2 md:text-3xl lg:text-3xl dark:text-yellow-50 lg:text-yellow-50'>
                            <Typed strings={['PYTHON DEVELOPER', 'WEB DEVELOPER', 'DATA ANALYST']} typeSpeed={100} backSpeed={40} loop />
                        </h3>
                    </div>
                </div>
            </div>
            
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96 '>
                <img src={pic} layout='fill' objectFit='cover' />
            </div>
        </div>
    </section>
    
  )
}

export default Sidebar