import React, { Component } from 'react';
import Slider from './Slider';



export default class LightBox extends Component {
    render() {
        const {
            prevSlide,
            nextSlide,
            imgSrc,
            title,
            alt
        } = this.props;
        return (
            <div className='wrapper-slider'>
                <Slider
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                    imgSrc={imgSrc}
                    title={title}
                    alt={alt} 
                />
            </div>
        );
    }
}