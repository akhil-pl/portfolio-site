import React, { useState, useEffect } from 'react';

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const Project = ({ title, description, keyPoints, repository, link, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Function to change the image index and loop back to the first image when reaching the last one
    const changeImage = (newIndex) => {
        setCurrentImageIndex(newIndex);
    };

    // Set up the interval to change the image every 3 seconds (adjust as needed)
    useEffect(() => {
        const slideshowInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(slideshowInterval);
    }, [images.length]);

    const prevImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const nextImageIndex = (currentImageIndex + 1) % images.length;

    const toggleDescription = () => {
        setShowFullDescription((prevShow) => !prevShow);
    };


    return (
        <div className="basis-1/3 flex-1 border p-4 rounded-lg shadow-lg mb-4 bg-slate-200 dark:bg-gray-700 text-gray-800 mx-auto dark:text-yellow-50 shadow-teal-600 hover:shadow-red-500 hover:scale-105">
            <h3 className="text-3xl text-teal-600 font-bold">{title}</h3>

            <div className="mt-2">
                {/* Slideshow of images */}
                <div className="relative">
                    <img
                        src={images[currentImageIndex].src}
                        alt={`Project ${title}`}
                        className="object-contain h-60 w-full rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        {images[currentImageIndex].caption}
                    </div>
                </div>
            </div>


            <div className="mt-2 flex justify-center">
                {/* Previous and Next Buttons */}
                <button onClick={() => changeImage(prevImageIndex)} className=" text-2xl">
                    <BiSolidLeftArrow className=' mx-5' />
                </button>
                <button onClick={() => changeImage(nextImageIndex)} className=" text-2xl">
                    <BiSolidRightArrow className=' mx-5' />
                </button>
            </div>

            <div className="mt-4">
                {/* Full Description and Key Points */}
                <p className=" text-justify mb-4">
                    {showFullDescription ? description : description.slice(0, 100) + '...'}
                    <button onClick={toggleDescription} className=" text-sm text-red-500">
                        {showFullDescription ? 'Show Less' : 'Show More'}
                    </button>
                </p>
                {showFullDescription && (
                    <ul className="list-disc pl-6">
                        <h3 className=' text-lg font-bold pb-2'>Key Features</h3>
                        {keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mt-4 flex justify-center">
                <a href={repository} target="_blank" rel="noopener noreferrer">
                    <button className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-xs text-white px-2 py-2 rounded-md ml-8">View Code</button>
                </a>
                <a className=" font-thin text-blue-900 underline" href={link} target="_blank" rel="noopener noreferrer">
                    <button className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-xs text-white px-2 py-2 rounded-md ml-8">View App</button>
                </a>
            </div>
        </div>
    );
};

export default Project;
