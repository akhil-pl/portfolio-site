import React from 'react'

import code from "../Images/code.gif";
import frontend from "../Images/frontend.gif";
import ml from "../Images/ml.gif";
import data from "../Images/data.gif";

function Mosaic() {
    return (
        <div className=' relative py-2 items-center justify-center'>
            {/* Row 1 */}
            <div className=' relative grid grid-cols-3' style={{ gridTemplateColumns: '45% 30% auto' }}>
                <div className='border bg-blue-200 relative p-4' style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 95%)' }}>
                    <span className="absolute text-green-700 text-5xl font-black">Python</span>
                    <span className="absolute left-1/2 text-teal-600 text-4xl font-bold">Flask</span>
                    <span className="absolute right-4 text-teal-600 text-2xl font-semibold">FastAPI</span>
                    <span className="absolute top-1/4 left-5 text-teal-600 text-2xl font-normal">Django</span>
                    <span className="absolute top-1/4 left-1/4 text-teal-600 text-3xl font-extrabold">Celery</span>
                    <span className="absolute top-1/4 left-1/2 text-teal-600 text-2xl">REST API</span>
                    <span className="absolute top-1/4 left-3/4 text-teal-600 text-3xl font-serif">MySQL</span>
                    <span className="absolute top-1/2 text-teal-600 text-3xl">Java</span>
                    <span className="absolute top-1/2 left-1/4 text-teal-600 text-3xl font-mono">Open API</span>
                    <span className="absolute top-1/2 right-8 text-teal-600 text-3xl font-sans">PostgreSQL</span>
                    <span className="absolute top-3/4 left-8 text-teal-600 text-3xl font-extrabold">SQL</span>
                    <span className="absolute top-3/4 left-44 text-teal-600 text-3xl font-sans">Redis</span>
                    <span className="absolute top-3/4 right-16 text-teal-600 text-2xl font-bold">SQLite</span>
                </div>
                <div className='border relative text-center' style={{ clipPath: 'polygon(5% 0, 95% 0, 95% 95%, -5% 95%)' }}>
                    <img className='mx-auto' src={code} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className='border bg-orange-300  relative text-center' style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 93%, 0 105%)' }}>
                    <h3 className='text-4xl font-bold py-1 text-teal-600 relative' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-30deg)' }}>
                        Backend Development
                    </h3>
                </div>
            </div>

            {/* Row 2 */}
            <div className='relative grid grid-cols-3' style={{ gridTemplateColumns: '25% 45% auto' }}>
                <div className='border bg-orange-300 relative text-center' style={{ clipPath: 'polygon(0 0, 90% 3%, 110% 97%, 0 95%)' }}>
                    <h3 className='text-4xl font-bold py-1 text-teal-600 relative' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-330deg)' }}>
                        Frontend Development
                    </h3>
                </div>
                <div className='border bg-blue-200 p-4' style={{ clipPath: 'polygon(0 3%, 95% 0,100% 97%, 3% 98%)', overflowX: 'auto' }}>
                    <span className="absolute left-80 text-green-600 text-4xl font-black">JavaScript</span>
                    <span className="absolute top-1/4 text-teal-600 text-3xl font-extrabold">VueJS</span>
                    <span className="absolute right-96 text-teal-600 text-4xl font-semibold">ReactJS</span>
                    <span className="absolute top-1/4 right-96 text-teal-600 text-3xl font-mono">Tailwind CSS</span>
                    <span className="absolute top-1/2 left-72 text-teal-600 text-3xl font-normal">Bootstrap</span>
                    <span className="absolute top-1/2 left-1/2 text-teal-600 text-2xl font-black">Chart JS</span>
                    <span className="absolute top-2/3 left-1/2 text-teal-600 text-3xl font-serif">Routing</span>
                    <span className="absolute top-2/3 left-96 text-teal-600 text-3xl">Vuex</span>
                    <span className="absolute top-3/4 text-teal-600 text-3xl font-extrabold">HTML5</span>
                    <span className="absolute top-3/4 right-80 text-teal-600 text-3xl font-black">CSS 3</span>
                </div>
                <div className='border relative text-center' style={{ clipPath: 'polygon(3% 8%, 100% -3%, 100% 110%, 3% 93%)' }}>
                    <img className='mx-auto' src={frontend} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>

            {/* Row 3 */}
            <div className='relative grid grid-cols-3' style={{ gridTemplateColumns: '30% 25% auto' }}>
                <div className='border relative text-center' style={{ clipPath: 'polygon(0 -3%, 95% 5%, 105% 100%, 0 100%)' }}>
                    <img className='mx-auto' src={ml} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className='border bg-orange-300 relative text-center' style={{ clipPath: 'polygon(-5% 3%, 95% 5%, 105% 100%, 8% 100%)' }}>
                    <h3 className='text-4xl font-bold py-1 text-teal-600 relative' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-30deg)' }}>
                        Machine Learning
                    </h3>
                </div>
                <div className='border bg-blue-300 p-4' style={{ clipPath: 'polygon(-5% 3%, 100% 6%, 100% 100%, 9% 100%)' }}>
                    <span className="absolute top-1/4 right-10 text-yellow-500 text-4xl font-black">Scikit-Learn</span>
                    <span className="absolute top-1/4 right-80 text-teal-500 text-4xl font-semibold">Azure AI</span>
                    <span className="absolute top-1/2 right-40 text-red-500 text-3xl font-nano">Deep Learning</span>
                </div>
            </div>

            {/* Row 4 */}
            <div className='relative grid grid-cols-3' style={{ gridTemplateColumns: '35% 40% auto' }}>
                <div className='border relative text-center' style={{ clipPath: 'polygon(0 -3%, 95% 5%, 105% 100%, 0 100%)' }}>
                    <img className='mx-auto' src={data} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className='border bg-blue-300 p-4' style={{ clipPath: 'polygon(-5% 3%, 100% 6%, 100% 100%, 9% 100%)' }}>
                    <span className="absolute top-1/4 left-96 text-yellow-500 text-4xl font-black">MS Power BI</span>
                    <span className="absolute top-1/4 right-80 text-teal-500 text-4xl font-semibold">Azure AI</span>
                    <span className="absolute top-1/2 right-40 text-red-500 text-3xl font-nano">Deep Learning</span>
                </div>
                <div className='border bg-orange-300 relative text-center' style={{ clipPath: 'polygon(-5% 3%, 95% 5%, 105% 100%, 8% 100%)' }}>
                    <h3 className='text-4xl font-bold py-1 text-teal-600 relative' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-330deg)' }}>
                        Data Analysis
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Mosaic