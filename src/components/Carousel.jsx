import React, { useState } from 'react';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import './Carousel.css';

import diploma from '../Images/About/diploma.png';
import diplomaD from '../Images/About/diplomaD.png';
import azureF from '../Images/About/azureF.png';
import azureAI from '../Images/About/azureAI.png';
import deep from '../Images/About/deep.png';

function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);

    function handleButtonClick(direction) {
        const items = document.querySelectorAll('.item');
        const lastIndex = items.length - 1;

        if (direction === 'next') {
            setActiveIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
        } else if (direction === 'prev') {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? lastIndex : prevIndex - 1));
        }
    }

    // const slider = document.querySelector('.slider');

    // function active(e) {
    //     const items = document.querySelectorAll('.item');
    //     e.target.matches('.next') && slider.append(items[0])
    //     e.target.matches('.prev') && slider.prepend(items[items.length-1]);
    // }

    // document.addEventListener('click', active, false);

    return (
        <div className="gallery" style={{ backgroundImage: `url(${activeIndex === 0 ? diploma : activeIndex === 1 ? diplomaD : activeIndex === 2 ? azureF : activeIndex === 3 ? azureAI : deep})` }}>
            {/* <img src={diploma} alt="Programming Diploma" />
            <img src={diplomaD} alt="Data Science Diploma" />
            <img src={azureF} alt="Azure Fundamental Certification" />
            <img src={azureAI} alt="Azure AI Certification" />
            <img src={deep} alt="Deep Learning Workshop" /> */}
            <ul class='slider'>
                <li class='item' style={{ backgroundImage: `url(${diploma})` }}>
                    <div class='content'>
                        <h2 class='title'>Programming Diploma</h2>
                        <p class='description'> Diploma in programming from IIT Madras</p>
                        <button>Details</button>
                    </div>
                </li>
                <li class='item' style={{ backgroundImage: `url(${diplomaD})` }}>
                    <div class='content'>
                        <h2 class='title'>Data Science Diploma</h2>
                        <p class='description'> Diploma in Data Science from IIT Madras</p>
                        <button>Details</button>
                    </div>
                </li>
                <li class='item' style={{ backgroundImage: `url(${azureF})` }}>
                    <div class='content'>
                        <h2 class='title'>MS Certification</h2>
                        <p class='description'> Azure Fundamentals</p>
                        <button>Details</button>
                    </div>
                </li>
                <li class='item' style={{ backgroundImage: `url(${azureAI})` }}>
                    <div class='content'>
                        <h2 class='title'>Microsoft</h2>
                        <p class='description'> Azure AI Certification</p>
                        <button>Details</button>
                    </div>
                </li>
                <li class='item' style={{ backgroundImage: `url(${deep})` }}>
                    <div class='content'>
                        <h2 class='title'>Workshop</h2>
                        <p class='description'> Deep Learning</p>
                        <button>Details</button>
                    </div>
                </li>
                <li class='item' style={{ backgroundImage: `url(${deep})` }}>
                    <div class='content'>
                        <h2 class='title'>Workshop 2</h2>
                        <p class='description'> Deep Learning 2</p>
                        <button>Details</button>
                    </div>
                </li>
            </ul>
            <nav class='nav'>
                {/* <button class='btn prev'><AiFillCaretLeft /></button>
                <button class='btn next'><AiFillCaretRight /></button> */}
                <button className="btn prev" onClick={() => handleButtonClick('prev')}><AiFillCaretLeft /></button>
                <button className="btn next" onClick={() => handleButtonClick('next')}><AiFillCaretRight /></button>
            </nav>
        </div>
    );
}

export default Carousel;
