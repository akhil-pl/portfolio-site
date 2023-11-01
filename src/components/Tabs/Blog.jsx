import React from 'react'

import edit from '../../Images/Logos/edit.gif';
import service from '../../Images/Logos/service.gif';


function Blog() {
    return (
        <div className='bg-slate-500 text-yellow-50 p-4 mb-5'>
            <h1 className="text-3xl font-burtons p-4">Technical Blogs</h1>
            <div className='flex flex-wrap gap-3 items-center justify-center mx-auto'>
                <img src={edit} width={150} height={150} />
                <img src={service} width={150} height={150} />
            </div>
            <h2 className="text-2xl p-4 text-center">Sorry for the suspense, edit is going on.</h2>
        </div>
    )
}

export default Blog