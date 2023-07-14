import React from 'react'

import {AiFillFacebook,
    AiFillGithub,
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillInstagram} from 'react-icons/ai';
import {BsPhone} from 'react-icons/bs';
import {BiLogoPython,
    BiLogoJavascript,
    BiLogoDjango,
    BiLogoVuejs,
    BiLogoReact,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJava,
    BiLogoFlask} from 'react-icons/bi';
import {MdAlternateEmail} from 'react-icons/md';


function Footer() {
  return (
    <section className='max-x-[1240px] mx-auto py-1 px-8 grid md:grid-cols-3 gap-8 bg-slate-300 dark:bg-gray-800 text-slate-500 rounded-3xl items-center'>
        <div>
            <h1>
                Akhil P L | Python Developer
            </h1>
            <p>
                Site build with ReactJS and Tailwind CSS
            </p>
            <div className='flex justify-between my-3'>
                <BiLogoPython />
                <BiLogoJavascript />
                <BiLogoFlask />
                <BiLogoDjango />
                <BiLogoVuejs />
                <BiLogoReact />
                <BiLogoHtml5 />
                <BiLogoCss3 />
                <BiLogoJava />
                <AiFillGithub />
            </div>
        </div>
        <div>
            <ul>
                <li className='flex flex-wrap gap-3 items-center'><BsPhone /> +91 9995 743 556</li>
                <li className='flex flex-wrap gap-3 items-center'><MdAlternateEmail /> akhilplx@gmail.com</li>
            </ul>
            <div className='flex justify-between md:w-[75%] my-3'>
                <AiFillFacebook />
                <AiFillTwitterSquare />
                <AiFillInstagram />
                <AiFillLinkedin />
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <p>&copy; akhil 2023. All rights reserved.</p>
            <p>Logos belongs to respective brands.</p>
            <a href="https://lordicon.com/">Animated icons by Lordicon.com</a>
        </div>
    </section>
  )
}

export default Footer