import React from 'react';

import './slider.css';

// HI, I am a functional Component
const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: '50% 60%'
    }
    return <div className='slide slide-image' style={styles}></div>
};

export default Slide;
