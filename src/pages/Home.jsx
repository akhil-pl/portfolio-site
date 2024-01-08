import React from 'react'

import Mosaic from '../components/Mosaic';
import Cards from '../components/Cards';

function Home() {
    return (

        <section className=' pt-10 px-5'>
            <div className=' pl-5'>
                <h3 className=' text-3xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>Hello World! I can offer these Services</h3>
                <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    As a passionate and enthusiastic professional embarking on a career in Programming and Data Science,
                    I offer a range of services aimed at developing efficient and innovative software solutions.
                    Whether you require a simple website or a complex web platform,
                    I can deliver robust solutions that enhance user experience and meet your business objectives.
                </p>
                <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    With a strong foundation in Python development, full-stack development, and machine learning,
                    I can provide the following services:
                </p>
            </div>
            <div className='md:hidden'>
                <Cards />
            </div>
            <div className='relative hidden md:flex'>
                <Mosaic />
            </div>
            <div>
                <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    As a fresher, I bring a fresh perspective and a willingness to learn and adapt, providing valuable
                    insights and suggestions to enhance your projects.<br></br>
                    I am dedicated to continuous learning and staying up-to-date with industry trends.
                    By leveraging my skills and enthusiasm, I am committed to delivering solutions that meet your needs
                    and contribute to your success.
                </p>
            </div>
        </section>

    )
}

export default Home