import React from 'react';
import Typed from 'react-typed';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram} from 'react-icons/ai';
import pic from "../Images/akhil.jpg";

function Sidebar(props) {
  return (
    
    <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
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
            <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-7xl lg:text-9xl'>
                AKHIL P L
            </h2>
            <div>
                <h3 className=' text-2xl py-2 md:text-3xl lg:text-4xl'>
                    <Typed strings={['Python Developer', 'Web Developer', 'Data Analyst']} typeSpeed={100} backSpeed={40} loop />
                </h3>
            </div>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-yellow-50 '>
            An enthusiastic professional, currently in a daring attempt to restart his career in the field of Programming and Data Science, after having 8+ years of experience as a Civil Engineer. After finishing Diploma in Programming, now doing Diploma in Data Science as part of a multilevel online BS Degree offered by IIT, Madras.
            Seeking a role as a Developer or Data Analyst, where I can apply my technical skills to develop efficient and innovative software solutions. Eager to learn and grow as a professional in a dynamic and collaborative work environment.
            </p>
        </div>
        <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillFacebook />
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96 '>
            <img src={pic} layout='fill' objectFit='cover' />
        </div>
    </section>
    
  )
}

export default Sidebar