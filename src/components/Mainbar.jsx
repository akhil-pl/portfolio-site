import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Work from '../pages/Work'
import Contact from '../pages/Contact'

function Mainbar() {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Work' element={<Work />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Mainbar