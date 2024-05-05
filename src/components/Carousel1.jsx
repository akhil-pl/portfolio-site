import React, { useState, useEffect } from 'react';

import diploma from '../Images/About/diploma.png';
import diplomaD from '../Images/About/diplomaD.png';
import azureF from '../Images/About/azureF.png';
import azureAI from '../Images/About/azureAI.png';
import deep from '../Images/About/deep.png';

const CertificateCarousel = ({ certificateImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificateImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [certificateImages.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="flex" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {certificateImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Certificate ${index + 1}`}
            className="w-full h-auto max-h-screen"
          />
        ))}
      </div>
    </div>
  );
};

// Usage
const certificateImages = [
  { src: diploma, caption: 'Diploma' },
  { src: diplomaD, caption: 'Diploma D' },
  { src: azureF, caption: 'Azure F' },
  { src: azureAI, caption: 'Azure AI' },
  { src: deep, caption: 'Deep' },
];

const Carousel = () => {
  return (
    <div className="h-fit flex items-center justify-center bg-gray-200">
      <CertificateCarousel certificateImages={certificateImages} />
    </div>
  );
};

export default Carousel;
