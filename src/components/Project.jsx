import React, { useState, useEffect } from 'react';

import { GrPrevious, GrNext } from 'react-icons/gr';

const Project = ({ title, description, keyPoints, repository, link, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    return (
        <div className="basis-1/3 flex-1 border p-4 rounded-lg shadow-lg mb-4 bg-slate-400 dark:bg-gray-600 text-gray-800 mx-auto dark:text-yellow-50 shadow-teal-600 hover:shadow-red-500">
            <h3 className="text-2xl mb-2">{title}</h3>

            <div className="mt-4">
                {/* Slideshow of images */}
                <div className="relative">
                    <img
                        src={images[currentImageIndex].src}
                        alt={`Project ${title}`}
                        className="object-contain h-48 w-full rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        {images[currentImageIndex].caption}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                {/* Previous and Next Buttons */}
                <button
                    onClick={() => changeImage(prevImageIndex)}
                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8"
                >
                    <GrPrevious />
                </button>
                <button
                    onClick={() => changeImage(nextImageIndex)}
                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8"
                >
                    <GrNext />
                </button>
            </div>

            <p className=" mb-4">{description}</p>
            <ul className="list-disc pl-6">
                {keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <div className="mt-4 flex justify-center">
                {/* <span className="font-semibold">Repository:</span>{' '} */}
                <a href={repository} target="_blank" rel="noopener noreferrer">
                    <button className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8">View Code</button>
                </a>
            {/* </div>
            <div className="mt-2">
                <span className="font-semibold">Hosted Link:</span>{' '} */}
                <a className=" font-thin text-blue-900 underline" href={link} target="_blank" rel="noopener noreferrer">
                <button className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8">View App</button>
                </a>
            </div>
        </div>
    );
};

export default Project;
