import React, { useState, useEffect } from 'react';

const Project = ({ title, description, keyPoints, repository, link, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to change the image index and loop back to the first image when reaching the last one
//   const changeImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Set up the interval to change the image every 3 seconds (adjust as needed)
//   useEffect(() => {
//     const slideshowInterval = setInterval(changeImage, 3000);
//     return () => clearInterval(slideshowInterval);
//   }, []);

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

//   const currentImage = images[currentImageIndex];

  return (
    <div className="border p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc pl-6">
        {keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div>
          <span className="font-semibold">Repository:</span>{' '}
          <a href={repository} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
        <div className="mt-2">
          <span className="font-semibold">Hosted Link:</span>{' '}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
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
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => changeImage(nextImageIndex)}
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
