import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from '../images/animation.json'

function Loading({width, height}) {

    const options = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Lottie 
            width={width}
            height={height}
            options={options}
            isClickToPauseDisabled={true}
        />
    );
}

export default Loading;