import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import diploma from '../Images/About/diploma.png';
import diplomaD from '../Images/About/diplomaD.png';
import azureF from '../Images/About/azureF.png';
import azureAI from '../Images/About/azureAI.png';
import deep from '../Images/About/deep.png';


function Carousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div>
            <ReactSimplyCarousel
                containerProps={{
                    style: {
                      width: "100%",
                      justifyContent: "space-between",
                      userSelect: "none"
                    }
                  }}
                activeSlideIndex={activeSlideIndex}
                activeSlideProps={{
                    style: {
                      background: "blue"
                    }
                  }}
                onRequestChange={setActiveSlideIndex}
                // itemsToShow={3}
                // itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                // responsiveProps={[
                //     {
                //         itemsToShow: 2,
                //         itemsToScroll: 2,
                //         minWidth: 768,
                //     },
                // ]}
                speed={400}
                easing="linear"
                centerMode
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div>
                    <img className=' mx-auto' src={diploma} width={5000} height={5000} />
                </div>
                <div>
                    <img className=' mx-auto' src={diplomaD} width={5000} height={5000} />
                </div>
                <div>
                    <img className=' mx-auto' src={azureF} width={5000} height={5000} />
                </div>
                <div>
                    <img className=' mx-auto' src={azureAI} width={5000} height={5000} />
                </div>
                <div>
                    <img className=' mx-auto' src={deep} width={5000} height={5000} />
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default Carousel;
