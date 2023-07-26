import React, { useState, useEffect } from 'react';

import { AiFillCaretLeft, AiFillCaretRight, AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

const Project = ({ title, description, keyPoints, repository, link, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(true);


    // Function to change the image index and loop back to the first image when reaching the last one
    const changeImage = (newIndex) => {
        setCurrentImageIndex(newIndex);
    };

    useEffect(() => {
        let slideshowInterval = null;
        if (isSlideshowPlaying) {
            slideshowInterval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(slideshowInterval);
    }, [isSlideshowPlaying, images.length]);
    

    const prevImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const nextImageIndex = (currentImageIndex + 1) % images.length;

    const toggleDescription = () => {
        setShowFullDescription((prevShow) => !prevShow);
    };

    const toggleSlideshow = () => {
        setIsSlideshowPlaying((prevStatus) => !prevStatus);
    };
    


    return (
        <div className="basis-1/3 flex-1 border p-4 rounded-lg shadow-lg mb-4 bg-slate-200 dark:bg-gray-700 text-gray-800 mx-auto dark:text-yellow-50 shadow-teal-600 hover:shadow-red-500 hover:scale-105">
            <h3 className="text-3xl text-teal-600 font-bold">{title}</h3>

            <div className="relative mt-4">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <button onClick={() => changeImage(prevImageIndex)} className="bg-slate-200 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 absolute top-3/4 transform -translate-y-1/2 left-4 text-2xl rounded-md">
                        <AiFillCaretLeft />
                    </button>
                    <button onClick={toggleSlideshow} className="bg-slate-200 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 absolute top-3/4 transform -translate-y-1/2 left-1/2 text-2xl rounded-md">
                        {isSlideshowPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                    </button>
                    <button onClick={() => changeImage(nextImageIndex)} className="bg-slate-200 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 absolute top-3/4 transform -translate-y-1/2 right-4 text-2xl rounded-md">
                        <AiFillCaretRight />
                    </button>
                </div>
                <img
                    src={images[currentImageIndex].src}
                    alt={`Project ${title}`}
                    className="object-contain h-60 w-full rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    {images[currentImageIndex].caption}
                </div>
            </div>

            <div className="mt-4">
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
                {link !== 'NOT HOSTED' && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-xs text-white px-2 py-2 rounded-md ml-8">View App</button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Project;
