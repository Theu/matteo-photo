import React from 'react';

import './arrows.css';

const RightArrow = (props) => {
    return (
        <div 
            className='nextArrow'
            onClick={props.goToNextSlide}
        >
            next
        </div>
    );
};

export default RightArrow;