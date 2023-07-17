import React from 'react'

import ak1 from "../../Images/ak1.jpg";
import ak2 from "../../Images/ak2.jpg";
import ak3 from "../../Images/ak3.jpg";
import ak4 from "../../Images/ak4.jpg";


function PythonProject() {
  return (
    <div>
        This is from Python Project
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
    </div>
  )
}

export default PythonProject