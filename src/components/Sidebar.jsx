import React from 'react';
import Typed from 'react-typed';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import pic from "../Images/akhil.jpg";

function Sidebar(props) {
  return (
    
    <section className="min-h-screen lg:bg-gray-800">
        <nav className=' px-5 py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>Developed By</h1>
            <ul className=' flex items-center'>
                <li>
                    <BsFillMoonStarsFill onClick={() => props.setDarkMode(!props.darkMode) } className=' cursor-pointer text-2xl' />
                </li>
                <li>
                    <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
                </li>
            </ul>
        </nav>
        <div className=' text-center p-10'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl'>
                AKHIL P L
            </h2>
            <div>
                <h3 className=' text-2xl py-2 md:text-3xl lg:text-3xl'>
                    <Typed strings={['PYTHON DEVELOPER', 'WEB DEVELOPER', 'DATA ANALYST']} typeSpeed={100} backSpeed={40} loop />
                </h3>
            </div>
            
        </div>
        
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96 '>
            <img src={pic} layout='fill' objectFit='cover' />
        </div>
    </section>
    
  )
}

export default Sidebar