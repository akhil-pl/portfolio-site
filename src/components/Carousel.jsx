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
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % certificateImages.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [certificateImages.length]);

  const calculateImagePositions = (imageIndex) => { // Use imageIndex for clarity
    const positions = [];
    const numImages = certificateImages.length;

    // Calculate center image index, handling edge cases
    const centerIndex =
      Math.min(Math.max(imageIndex, 0), numImages - 1);

    for (let i = 0; i < 3; i++) {
      const offsetIndex = (centerIndex - i + numImages) % numImages; // Handle wraparound
      positions.push({
        index: offsetIndex,
        style: {
          transform: `translateX(${
            i === 1 ? '0' : (i === 0 ? '-33.33%' : '33.33%')
          })`,
          opacity: i === 1 ? 1 : 0.7, // Adjust opacity for visual emphasis
          width: i === 1 ? '100%' : '66.66%', // Adjust width for size variation
        },
      });
    }

    return positions;
  };

  // Use imageIndex directly instead of calculating it again
  const imagePositions = calculateImagePositions(currentIndex);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {imagePositions.map((position) => (
        <img
          key={position.index}
          src={certificateImages[position.index].src}
          alt={`Certificate ${position.index + 1}`}
          className={`w-${position.style.width} h-auto max-h-screen absolute ${position.style.transform}`}
          style={position.style}
        />
      ))}
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
    <div className=" h-fit flex items-center justify-center bg-gray-200">
      <CertificateCarousel certificateImages={certificateImages} />
    </div>
  );
};

export default Carousel;
