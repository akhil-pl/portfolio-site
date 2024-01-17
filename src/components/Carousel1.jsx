import React, { useState, useEffect } from 'react';

import diploma from '../Images/About/diploma.png';
import diplomaD from '../Images/About/diplomaD.png';
import azureF from '../Images/About/azureF.png';
import azureAI from '../Images/About/azureAI.png';
import deep from '../Images/About/deep.png';

function Carousel1() {
  const achievements = [
    {
      title: 'Programming',
      description: 'Diploma in Programming from IIT Madras',
      image: diploma,
    },
    {
      title: 'Data Science',
      description: 'Diploma in Data Science from IIT Madras',
      image: diplomaD,
    },
    {
      title: 'Azure',
      description: 'Certified in Azure Fundamentals by Microsoft',
      image: azureF,
    },
    {
      title: 'Azure AI',
      description: 'Certified in Azure AI by Microsoft',
      image: azureAI,
    },
    {
      title: 'Deep Learning',
      description: 'Attended Workshop on Deep Learning conducted by IIT Madras',
      image: deep,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, achievements.length]);

  const currentAchievement = achievements[currentIndex];
  const nextIndex1 = (currentIndex + 1) % achievements.length;
  const nextAchievement1 = achievements[nextIndex1];
  const nextIndex2 = (currentIndex + 2) % achievements.length;
  const nextAchievement2 = achievements[nextIndex2];
  const nextIndex3 = (currentIndex + 3) % achievements.length;
  const nextAchievement3 = achievements[nextIndex3];

  const containerStyle = {
    position: 'relative',
    height: '100%', // Adjust the height as needed
    width: '100%',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)'
    // overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
    // zIndex: -1,
    transition: 'transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s',
  };

  const textOverlayStyle = {
    display: 'flex',
    flexDirection: 'column',
    left: '100px',
    transform: 'translateY(50%)',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'black',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const nextImageStyle = {
    position: 'absolute',
    bottom: '50%',
    right: '240px',
    width: '100px', // Adjust the size as needed
    height: 'auto',
    opacity: 0.6,
    zIndex: 1,
  };

  const nextImageStyle2 = {
    position: 'absolute',
    bottom: '50%',
    right: '120px', // Adjust the distance from the corner
    width: '100px', // Adjust the size as needed
    height: 'auto',
    opacity: 0.6,
    zIndex: 1,
  };

  const nextImageStyle3 = {
    position: 'absolute',
    bottom: '50%',
    right: 0, // Adjust the distance from the corner
    width: '100px', // Adjust the size as needed
    height: 'auto',
    opacity: 0.6,
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <img src={currentAchievement.image} alt={currentAchievement.title} style={backgroundStyle} />
      <div style={textOverlayStyle}>
        <h2 style={textOverlayStyle}>{currentAchievement.title}</h2>
        <p style={textOverlayStyle}>{currentAchievement.description}</p>
      </div>
      <div style={nextImageStyle}>
        <img src={nextAchievement1.image} alt={nextAchievement1.title} />
      </div>
      <div style={nextImageStyle2}>
        <img src={nextAchievement2.image} alt={nextAchievement2.title} />
      </div>
      <div style={nextImageStyle3}>
        <img src={nextAchievement3.image} alt={nextAchievement3.title} />
      </div>
    </div>
  );
}

export default Carousel1;
