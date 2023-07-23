import React from 'react'

import poly from '../../Images/Logos/poly.gif';
import qr from '../../Images/Logos/qr.gif';
import ml from '../../Images/Logos/ml.gif';

function DSProject() {
  return (
    <div className='bg-slate-500 text-yellow-50 p-4 mb-5'>
            <h1 className="text-3xl font-burtons p-4">Data Science Projects</h1>
            <div className='flex flex-wrap gap-3 items-center justify-center mx-auto'>
                <img src={poly} width={100} height={100} />
                <img src={qr} width={100} height={100} />
                <img src={ml} width={100} height={100} />
            </div>
            <h2 className="text-2xl p-4 text-center">Please come later, the Machine is still learning</h2>
        </div>
  )
}

export default DSProject