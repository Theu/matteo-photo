import React, { PureComponent, Fragment } from 'react';
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
            <Fragment>
                <div className='image-wrapper'>
                    <a className='arrow prev' onClick={prevSlide}>&#10094;</a>    
                        <div className='display-image'>
                            <Image
                                imgSrc={imgSrc}
                                title={title}
                                alt={alt}
                            />
                        </div>
                    <a className='arrow next' onClick={nextSlide}>&#10095;</a>
                </div>
            </Fragment>
        );
    }
};

export default Slider;