import React from 'react'

import ak1 from "../Images/ak1.jpg";
import ak2 from "../Images/ak2.jpg";
import ak3 from "../Images/ak3.jpg";
import ak4 from "../Images/ak4.jpg";


function Work() {
  return (
    
    <section>
        <div>
            <h3 className=' text-3xl py-1'>Portfolio</h3>
            <p className=' text-md py-5 leading-8 text-gray-800'>
            An enthusiastic professional, currently in a daring attempt to restart his career in the field of Programming and Data Science, after having 8+ years of experience as a Civil Engineer. After finishing Diploma in Programming, now doing Diploma in Data Science as part of a multilevel online BS Degree offered by IIT, Madras.
            </p>
            <p className=' text-md py-5 leading-8 text-gray-800'>
            Seeking a role as a Developer or Data Analyst, where I can apply my technical skills to develop efficient and innovative software solutions. Eager to learn and grow as a professional in a dynamic and collaborative work environment.
            </p>
        </div>
        <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1'>
                <img src={ak1} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className=' basis-1/3 flex-1'>
                <img src={ak2} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className=' basis-1/3 flex-1'>
                <img src={ak3} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className=' basis-1/3 flex-1'>
                <img src={ak4} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
        </div>
    </section>
    
  )
}

export default Work