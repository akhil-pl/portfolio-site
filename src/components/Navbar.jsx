import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    const [nav,  setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-yellow-300'>
        <h1 className=' w-full text-3xl font-bold'>Go To</h1>
        {/* for bigger devices */}
        <ul className='hidden md:flex'>
            <NavLink to={'/'} className='p-4'>Home</NavLink>
            <NavLink to={'/About'} className='p-4'>About</NavLink>
            <NavLink to={'/Work'} className='p-4'>Works</NavLink>
            <NavLink to={'/Contact'} className='p-4'>Contacts</NavLink>
            
        </ul>
        {/* for mobile devices */}
        <div onClick={handleNav} className=' block md:hidden'>
            { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-700 ' : 'fixed left-0' }>
            {/* <h1 className=' md:hidden w-full text-3xl font-bold m-4'>Select</h1> */}
            <ul className=' md:hidden pt-24 uppercase p-4'>
                <NavLink to={'/'} onClick={handleNav} className='p-4 border-b border-gray-600 block'>Home</NavLink>
                <NavLink to={'/About'} onClick={handleNav} className='p-4 border-b border-gray-600 block'>About</NavLink>
                <NavLink to={'/Work'} onClick={handleNav} className='p-4 border-b border-gray-600 block'>Works</NavLink>
                <NavLink to={'/Contact'} onClick={handleNav} className='p-4 block'>Contacts</NavLink>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar