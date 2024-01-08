import React from 'react'

import code from "../Images/code.gif";
import frontend from "../Images/frontend.gif";
import ml from "../Images/ml.gif";

function Mosaic() {
    return (
        <div className=' relative py-2 items-center justify-center'>
            {/* Row 1 */}
            <div className=' relative grid grid-cols-3' style={{ gridTemplateColumns: '45% 30% auto' }}>
                <div className='border bg-blue-300 relative p-4' style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 95%)' }}>
                    <span className="absolute text-red-600 text-4xl font-black">Python</span>
                    <span className="absolute left-1/2 text-yellow-400 text-4xl font-bold">Flask</span>
                    <span className="absolute left-3/4 text-green-600 text-xl font-semibold">FastAPI</span>
                    <span className="absolute top-1/4 text-blue-600 text-base font-normal">Django</span>
                    <span className="absolute top-1/4 left-1/4 text-amber-800 text-3xl font-extrabold">Celery</span>
                    <span className="absolute top-1/4 left-1/2 text-amber-800 text-3xl">REST API</span>
                    <span className="absolute top-1/2 text-orange-400 text-3xl">Open API</span>
                    <span className="absolute top-1/2 left-1/4 text-gray-900 text-3xl font-extrabold">Java</span>
                    <span className="absolute top-3/4 left-1/4 text-amber-800 text-3xl font-extrabold">SQL</span>
                    <span className="absolute top-3/4 left-1/2 text-amber-800 text-3xl font-extrabold">Redis</span>
                    <span className="absolute top-1/2 left-1/4 text-amber-800 text-3xl font-extrabold">SQLite</span>
                    <span className="absolute top-1/2 left-1/4 text-amber-800 text-3xl font-extrabold">MySQL</span>
                    <span className="absolute top-1/2 left-1/4 text-amber-800 text-3xl font-extrabold">PostgreSQL</span>
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
                <div className='border bg-blue-300 p-4' style={{ clipPath: 'polygon(0 3%, 95% 0,100% 97%, 3% 98%)' }}>
                    <div>Card 5</div>
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
                    <div>Card 9</div>
                </div>
            </div>
        </div>
    )
}

export default Mosaic