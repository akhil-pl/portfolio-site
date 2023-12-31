import React from 'react'

import code from "../Images/code.gif";
import frontend from "../Images/frontend.gif";
import ml from "../Images/ml.gif";

function Cards() {
    return (
        <div className=' md:flex gap-10'>
            <div className=' text-center bg-slate-400 dark:bg-gray-600 shadow-lg shadow-teal-600 p-10 rounded-xl my-10 flex-1 hover:shadow-red-500'>
                <img className=' mx-auto' src={code} width={500} height={500} />
                <h3 className=' text-lg font-medium pt-8 pb-2 text-gray-800 mx-auto dark:text-yellow-50'>Back-end development</h3>
                <p className=' py-2 text-justify text-gray-800 mx-auto dark:text-yellow-50'>
                    With my proficiency in Python and frameworks like <span className=' text-teal-600'>Flask & Django</span>,
                    I can build secure and scalable back-end systems that power your web applications.
                    From API development to database management,
                    I prioritize clean code and best practices to ensure high performance and maintainability.
                </p>
                <h4 className=' py-4 text-teal-600'>Familier with</h4>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Celery</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Open API</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Java</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>SQLite</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Redis</p>
            </div>
            <div className=' text-center bg-slate-400 dark:bg-gray-600 shadow-lg shadow-teal-600 p-10 rounded-xl my-10 flex-1 hover:shadow-red-500'>
                <img className=' mx-auto' src={frontend} width={500} height={500} />
                <h3 className=' text-lg font-medium pt-8 pb-2 text-gray-800 mx-auto dark:text-yellow-50'>Front-end development</h3>
                <p className=' py-2 text-justify text-gray-800 mx-auto dark:text-yellow-50'>
                    Utilizing my knowledge in JavaScript libraries like <span className=' text-teal-600'>VueJS & ReactJS</span>,
                    I can design visually appealing and responsive user interfaces.
                    By employing modern design principles, I ensure that your website is attractive,
                    user-friendly, and accessible across different devices and browsers.
                </p>
                <h4 className=' py-4 text-teal-600'>Familier with</h4>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Bootstrap</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Tailwind CSS</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>ChartJS</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Routing</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Vuex</p>
            </div>
            <div className=' text-center bg-slate-400 dark:bg-gray-600 shadow-lg shadow-teal-600 p-10 rounded-xl my-10 flex-1 hover:shadow-red-500'>
                <img className=' mx-auto' src={ml} width={500} height={500} />
                <h3 className=' text-lg font-medium pt-8 pb-2 text-gray-800 mx-auto dark:text-yellow-50'>Machine Learning</h3>
                <p className=' py-2 text-justify text-gray-800 mx-auto dark:text-yellow-50'>
                    Building on my understanding of Python ML packages, I can assist with tasks like data preprocessing,
                    model training, and evaluation. Whether you're working on a small ML project or need guidance with
                    implementing algorithms like <span className=' text-teal-600'>Linear & Kernal Regresssion, KNN, SVM</span>,
                    I can support you in your data-driven endeavors.
                </p>
                <h4 className=' py-4 text-teal-600'>Familier with</h4>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>NumPY</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Pandas</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>scikit-learn</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>Matplotlib</p>
                <p className=' py-1 text-gray-800 mx-auto dark:text-yellow-50'>PyTorch</p>
            </div>
        </div>
    )
}

export default Cards