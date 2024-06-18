import React from 'react'

import Mosaic from '../components/Mosaic';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import Carousel1 from '../components/Carousel1';

function Home() {
    return (

        <section className=' pt-10 px-5'>
            <div className=' pl-5'>
                <h3 className=' text-3xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>Hello World!</h3>
                <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    As a passionate and enthusiastic professional embarking on a career in Programming and Data Science,
                    I offer a range of services aimed at developing efficient and innovative software solutions.
                    Whether your requirement varies from creating a simple website to building a complex web platform OR
                    from simply getting an inference from your data to training a predictive Machine learning model out of the data,
                    I can deliver robust solutions that enhance user experience and meet your business objectives.
                </p>
                <br></br>
            </div>
            <h3 className=' text-2xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>Services I can offer</h3>
            <div className='md:hidden'>
                <Cards />
            </div>
            <div className='relative hidden md:flex'>
                <Mosaic />
            </div>
            <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                For more details please go to the projects page.
            </p>
            <div>
                <h3 className=' text-2xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>Acheivements</h3>
                {/* <div style={{ maxWidth: 'calc(100vw - 120px)', maxHeight: 'calc(100vw * 2 / 4 - 40px)', display: 'grid', placeItems: 'center', overflow: 'hidden' }}> */}
                <div style={{ display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                    <Carousel />
                </div>
                <h3 className=' text-2xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>Associated with</h3>
                <div style={{ maxWidth: 'calc(100vw - 120px)', maxHeight: '80vh', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                    <Carousel1 />
                </div>
                <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    For more details please go to the about page.
                </p>
            </div>
        </section>

    )
}

export default Home