import React, { PureComponent } from 'react';
import Image from './Image';

import './lightbox.css';

class Slider extends PureComponent {
    render() {
        const {
            prevSlide,
            nextSlide,
            imgSrc,
            title,
            alt
        } = this.props;
        
        return (
            <div>
                <a className='prev' onClick={prevSlide}>&#10094;</a>    
                    <div className='display-image'>
                        <Image
                            imgSrc={imgSrc}
                            title={title}
                            alt={alt}
                        />
                    </div>               
                <a className='next' onClick={nextSlide}>&#10095;</a>
            </div>
        );
    }
};

export default Slider;