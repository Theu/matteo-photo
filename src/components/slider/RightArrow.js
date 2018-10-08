import React from 'react';

import './slider.css';

const RightArrow = (props) => {
    return (
        <div 
            className='nextArrow'
            onClick={props.goToNextSlide}
        >
            &gt;
        </div>
    );
};

export default RightArrow;