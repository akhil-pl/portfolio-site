import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import Footer from './Footer';

function Mainbar() {
  return (
    <div className=' pt-5 px-5'>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Work' element={<Work />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default Mainbar