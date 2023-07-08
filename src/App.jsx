import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram} from 'react-icons/ai';
// import ak from '../public/CROP2.jpg';


function App() {

  return (
    <main className=' bg-white px-10 '>
      <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>Akhil</h1>
            <ul className=' flex items-center'>
                <li>
                    <BsFillMoonStarsFill className=' cursor-pointer text-2xl' />
                </li>
                <li>
                    <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
                </li>
            </ul>
        </nav>
        <div className=' text-center p-10'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium'>About</h2>
            <h3 className=' text-2xl py-2'>Developer and Data Scientiest</h3>
            <p className=' text-md py-5 leading-8 text-gray-800'>
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
        <div>
            {/* <Image src="/CROP2.jpg" alt="My Image" /> */}
        </div>
      </section>
    </main>
  )
}

export default App
