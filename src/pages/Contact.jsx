import React from 'react'

import {AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram} from 'react-icons/ai';

import mobile from '../Images/Logos/mobile.gif';
import email from '../Images/Logos/email.gif';
import social from '../Images/Logos/social.gif';
import location from '../Images/Logos/location.gif';
import chat from '../Images/Logos/chat.gif';

function Contact() {
  return (
    <section className=' pt-10 px-5'>
        <div className=' pl-5'>
            <h3 className=' text-3xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>Get In Touch</h3>
            <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                Thank you for visiting my portfolio site! I'm excited to connect with you and discuss how we can 
                collaborate on exciting projects or answer any questions you may have. Feel free to reach out to 
                me using any of the methods below:
            </p>
            <div>
                <ul>
                    <li className='flex flex-wrap gap-3 items-center'><img className=' mx-auto' src={mobile} width={75} height={75} /> +91 9995 743 556</li>
                    <li className='flex flex-wrap gap-3 items-center'><img className=' mx-auto' src={email} width={75} height={75} /> akhilplx@gmail.com</li>
                    <li className='flex flex-wrap gap-3 items-center'><img className=' mx-auto' src={social} width={75} height={75} />
                        <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-yellow-50'>
                            <AiFillFacebook />
                            <AiFillGithub />
                            <AiFillInstagram />
                            <AiFillLinkedin />
                        </div>    
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Contact