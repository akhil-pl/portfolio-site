import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    const [nav,  setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-yellow-300'>
        <h1 className=' w-full text-3xl font-bold'>Hi</h1>
        {/* for bigger devices */}
        <ul className='hidden md:flex'>
            <li className='p-4'>About</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Works</li>
            <li className='p-4'>Contacts</li>
            
        </ul>
        {/* for mobile devices */}
        <div onClick={handleNav} className=' block md:hidden'>
            { !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={ !nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-700 ' : 'fixed left-0' }>
            <h1 className=' w-full text-3xl font-bold m-4'>Hi</h1>
            <ul className=' pt-24 uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Works</li>
                <li className='p-4'>Contacts</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar