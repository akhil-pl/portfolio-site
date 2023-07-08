import React, {useState} from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram} from 'react-icons/ai';
import pic from "./Images/akhil.jpg";
import code from "./Images/code.png";
import consulting from "./Images/consulting.png";
import design from "./Images/design.png";
import ak1 from "./Images/ak1.jpg";
import ak2 from "./Images/ak2.jpg";
import ak3 from "./Images/ak3.jpg";
import ak4 from "./Images/ak4.jpg";



function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "" }>
    <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700 '>
      <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>Developed By</h1>
            <ul className=' flex items-center'>
                <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode) } className=' cursor-pointer text-2xl' />
                </li>
                <li>
                    <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
                </li>
            </ul>
        </nav>
        <div className=' text-center p-10'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-7xl lg:text-9xl'>
                AKHIL P L
            </h2>
            <h3 className=' text-2xl py-2 md:text-3xl lg:text-4xl'>Developer and Data Scientiest</h3>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto '>
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
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96 '>
            <img src={pic} layout='fill' objectFit='cover' />
        </div>
      </section>
      
      <section>
        <div>
            <h3 className=' text-3xl py-1'>Services I offer</h3>
            <p className=' text-md py-2 leading-8 text-gray-800 md:text-xl mx-auto '>
                I am currently in my early stages of my coding journey, so there is nothing mutch I have to offer.
                But I have hands on experience in 
                <span className=' text-teal-500'>Flask, Django, VueJS</span> and <span className=' text-teal-500'>ReactJS.</span>
                I am also experienced in Bootstrap CSS and Tainwind.
            </p>
            <p className=' text-md py-2 leading-8 text-gray-800 md:text-xl mx-auto '>
                I am doing Diploma in Data Science. I am familier with pythom ML packages like
                <span className=' text-teal-500'>NumPy, Pandas, SkLearn</span> etc.
            </p>
        </div>
        <div className=' lg:flex gap-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
                <img src={design} width={100} height={100} />
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
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
                <img src={code} width={100} height={100} />
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
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
                <img src={consulting} width={100} height={100} />
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

    </main>
    </div>
  )
}

export default App
