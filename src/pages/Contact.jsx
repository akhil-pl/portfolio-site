import React from 'react'

import {AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram} from 'react-icons/ai';


function Contact() {
  return (
    <div>
        <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillFacebook />
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
        </div>
    </div>
  )
}

export default Contact