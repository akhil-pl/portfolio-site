import React from 'react'

import Message from '../components/Message';

import {AiFillFacebook,
    AiFillGithub,
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillGitlab,
    AiFillInstagram} from 'react-icons/ai';

import {SiCodechef} from 'react-icons/si';

import mobile from '../Images/Logos/mobile.gif';
import email from '../Images/Logos/email.gif';
import social from '../Images/Logos/social.gif';
import location from '../Images/Logos/location.gif';
import chat from '../Images/Logos/chat.gif';
import repo from '../Images/Logos/repo.gif';

function Contact() {
  return (
    <section className=' grid grid-cols-1 py-5 px-5 md:grid-cols-2 gap-8 items-center'>
        <div className=' pl-5'>
            <h3 className=' text-3xl font-burtons text-gray-800 mx-auto dark:text-yellow-50'>Get In Touch</h3>
            <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                Thank you for visiting my portfolio site! I'm excited to connect with you and discuss how we can 
                collaborate on exciting projects or answer any questions you may have. Feel free to reach out to 
                me using any of the methods below:
            </p>
            <ul>
                <li className='flex flex-wrap gap-3 items-center text-xl text-gray-800 mx-auto dark:text-yellow-50'><img src={location} width={75} height={75} /> Trivandrun, <br></br> India </li>
                <li className='flex flex-wrap gap-3 items-center text-xl text-gray-800 mx-auto dark:text-yellow-50'><img src={mobile} width={75} height={75} /> +91 9995 743 556</li>
                <li className='flex flex-wrap gap-3 items-center text-xl text-gray-800 mx-auto dark:text-yellow-50'><img src={email} width={75} height={75} /> akhilplx@gmail.com <br></br> akhilplx@outlook.com </li>
                <li className='flex flex-wrap gap-3 items-center text-xl text-gray-800 mx-auto dark:text-yellow-50'><img src={social} width={75} height={75} />
                    <div className=' text-3xl flex justify-center gap-8 py-3 text-gray-600 dark:text-yellow-50'>
                        <a href="https://www.facebook.com/akhilplx" target="_blank" rel="noopener noreferrer" title="Facebook"><AiFillFacebook className=' hover:text-teal-600 hover:scale-150' /></a>
                        <a href="https://www.instagram.com/akhil_pl/" target="_blank" rel="noopener noreferrer" title="instagram"><AiFillInstagram className=' hover:text-teal-600 hover:scale-150' /></a>
                        <a href="https://www.linkedin.com/in/akhilplx" target="_blank" rel="noopener noreferrer" title="Linkedin"><AiFillLinkedin className=' hover:text-teal-600 hover:scale-150' /></a>
                        <a href="https://twitter.com/akhilplx" target="_blank" rel="noopener noreferrer" title="Twitter"><AiFillTwitterSquare className=' hover:text-teal-600 hover:scale-150' /></a>
                    </div>    
                </li>
                <li className='flex flex-wrap gap-3 items-center text-xl text-gray-800 mx-auto dark:text-yellow-50'><img src={repo} width={75} height={75} />
                    <div className=' text-3xl flex justify-center gap-8 py-3 text-gray-600 dark:text-yellow-50'>
                        <a href="https://github.com/akhil-pl" target="_blank" rel="noopener noreferrer" title="GitHub"><AiFillGithub className=' hover:text-teal-600 hover:scale-150' /> </a>
                        <a href="https://gitlab.com/akhilplx" target="_blank" rel="noopener noreferrer" title="GitLab"><AiFillGitlab className=' hover:text-teal-600 hover:scale-150' /> </a>
                        <a href="https://www.codechef.com/users/akhilplx" target="_blank" rel="noopener noreferrer" title="CodeChef"><SiCodechef className=' hover:text-teal-600 hover:scale-150' /> </a>
                    </div>    
                </li>
            </ul>
        </div>
        <div className=' p-5 bg-slate-400 dark:bg-gray-600 shadow-lg shadow-teal-600 rounded-xl my-10 flex-1 hover:scale-110 duration-300 hover:shadow-red-500'>
            <h3 className='flex flex-wrap gap-3 items-center text-3xl font-burtons text-gray-800 mx-auto dark:text-yellow-50'> <img className=' mx-auto' src={chat} width={75} height={75} /> Message me</h3>
            <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
            Alternatively, you can use the contact form provided below to send me a message directly. 
            Whether you have a project in mind, need assistance, or simply want to say hello, 
            I'm here to listen and respond promptly.<br></br>
            I value open communication and believe in the power of collaboration. 
            Let's explore how we can work together to achieve your goals. I look forward to hearing from you!
            </p>
            <Message />
        </div>
    </section>
  )
}

export default Contact