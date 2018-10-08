import React from 'react';

import './slider.css';

const LeftArrow = (props) => {
    return (
        <div 
            className='backArrow'
            onClick={props.goToPrevSlide}
        >
            &lt;
        </div>
    );
};

export default LeftArrow;