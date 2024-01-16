import React from 'react';

import diploma from '../Images/About/diploma.png';
import diplomaD from '../Images/About/diplomaD.png';
import azureF from '../Images/About/azureF.png';
import azureAI from '../Images/About/azureAI.png';
import deep from '../Images/About/deep.png';

function Carousel() {

    return (
        <div class="gallery">
            <img src={diploma} alt="Programming Diploma" />
            <img src={diplomaD} alt="Data Science Diploma" />
            <img src={azureF} alt="Azure Fundamental Certification" />
            <img src={azureAI} alt="Azure AI Certification" />
            <img src={deep} alt="Deep Learning Workshop" />
        </div>
    );
}

export default Carousel;
