import React from 'react';

import './arrows.css';

const LeftArrow = (props) => {
    return (
        <div 
            className='backArrow'
            onClick={props.goToPrevSlide}
        >
            back
        </div>
    );
};

export default LeftArrow;