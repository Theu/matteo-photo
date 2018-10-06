import React, { Component } from 'react';

import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import { imagesHp } from '../../images/index';

import './slider.css'

const imagesForSlider = imagesHp.map(images => {
    return images.imgSrc
})

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: imagesForSlider,
              currentIndex: 0,
              translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex <= 0) {
            
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue - -(this.slideWidth())
        }));
    }

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }


    render() {
        const imageSet = this.state.images;
        
        return (
            <div>
            <div className='slider'>
                <div className='slider-wrapper'
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                }}>
                    {
                        imageSet.map((image, index) => (
                            <Slide
                                key={index}
                                image={image}
                            />
                        ))
                    }
                </div>

                
            </div>
            <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                
            <RightArrow
                goToNextSlide={this.goToNextSlide}
            />
            </div>
        );
    }
};

export default Slider;