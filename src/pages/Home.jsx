import React from 'react'

import code from "../Images/code.gif";
import frontend from "../Images/frontend.gif";
import ml from "../Images/ml.gif";

function Home() {
  return (
    
    <section>
        <div className=' pl-5'>
            <h3 className=' text-3xl py-1'>Services I offer</h3>
            <p className=' text-md py-2 leading-8 text-gray-800 md:text-xl mx-auto dark:text-yellow-50 '>
                I am currently in my early stages of my coding journey, so there is nothing mutch I have to offer.
                But I have hands on experience in 
                <span className=' text-teal-500'>Flask, Django, VueJS</span> and <span className=' text-teal-500'>ReactJS.</span>
                I am also experienced in Bootstrap CSS and Tainwind.
            </p>
            <p className=' text-md py-2 leading-8 text-gray-800 md:text-xl mx-auto dark:text-yellow-50 '>
                I am doing Diploma in Data Science. I am familier with pythom ML packages like
                <span className=' text-teal-500'>NumPy, Pandas, SkLearn</span> etc.
            </p>
        </div>
        <div className=' md:flex gap-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 duration-300'>
                <img className=' mx-auto' src={code} width={500} height={500} />
                <h3 className=' text-lg font-medium pt-8 pb-2'>Backend and appication development</h3>
                <p className=' py-2'>
                    Write scalable and effecient codes in Python. Familier with packages like
                    <span className=' text-teal-500'>Flask & Django </span> and their currousponding dependencies.
                    Experience in developing RESTFull APIs and managing databases like
                    <span className=' text-teal-500'>SQLit, Redis & PostgreSQL</span>
                </p>
                <h4 className=' py-4 text-teal-600'>Other Tools used</h4>
                <p className=' text-gray-800 py-1'>Celery</p>
                <p className=' text-gray-800 py-1'>Open API</p>
                <p className=' text-gray-800 py-1'>Java</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 duration-300 '>
                <img className=' mx-auto' src={frontend} width={500} height={500} />
                <h3 className=' text-lg font-medium pt-8 pb-2'>Web frontend desinging</h3>
                <p className=' py-2'>
                    Desing elegand and responsive frontend web pages using JavaScript packages like
                    <span className=' text-teal-500'>VueJS & ReactJS </span> and CSS libraries like
                    <span className=' text-teal-500'>Tailwind & Bootstrap</span>
                </p>
                <h4 className=' py-4 text-teal-600'>Other Tools used</h4>
                <p className=' text-gray-800 py-1'>ChartJS</p>
                <p className=' text-gray-800 py-1'>Bootstrap Icons</p>
                <p className=' text-gray-800 py-1'>React Icons</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 duration-300'>
                <img className=' mx-auto' src={ml} width={500} height={500} />
                <h3 className=' text-lg font-medium pt-8 pb-2'>Machine Learning</h3>
                <p className=' py-2'>
                    Data Analysis and creating both supervised and unsupervised ML models like
                    <span className=' text-teal-500'>Linear & Kernal Regression, KNN </span> and
                    <span className=' text-teal-500'>SVM</span>
                </p>
                <h4 className=' py-4 text-teal-600'>Tools used</h4>
                <p className=' text-gray-800 py-1'>NumPy</p>
                <p className=' text-gray-800 py-1'>Pandas</p>
                <p className=' text-gray-800 py-1'>SkLearn</p>
            </div>
        </div>
    </section>
    
  )
}

export default Home