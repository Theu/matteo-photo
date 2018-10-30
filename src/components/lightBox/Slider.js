import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

import { imagesHp } from '../../images/index';

import './lightbox.css';

const imagesForSlider = imagesHp.map(images => {
    return images.imgSrc
});

export default class Slider extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            images: imagesForSlider,
            currentIndex: 0,
            translateValue: 0
        }
    }
    
    static propTypes = {
        prevSlide: PropTypes.func,
        nextSlide: PropTypes.func,
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        index: PropTypes.number
    }

    prevSlide = () => {
        (this.state.currentIndex === 0) ? 
            this.setState({ currentIndex: 0 }) : 
            this.setState((previousIndex) => ({ currentIndex: previousIndex.currentIndex - 1 }))
    }

    nextSlide = () => {
        (this.state.currentIndex === (imagesForSlider.length - 1)) ? 
            this.setState({ currentIndex: 0 }) : 
            this.setState((previousIndex) => ({ currentIndex: previousIndex.currentIndex + 1 }))
    }
        
        
    

    render() {
        const imageSet = this.state.images;
        
        return (
            <div>
                <a className='prev' onClick={this.prevSlide}>&#10094;</a>    
               
                            <div className='display-image'>
                                <Image
                                    imgSrc={`http://localhost:3000/${imagesHp[this.state.currentIndex].imgSrc}`}
                                    title={imagesHp[this.state.currentIndex].title}
                                    alt={imagesHp[this.state.currentIndex].title}
                                />
                            </div>               
                    
                   
                    
                <a className='next' onClick={this.nextSlide}>&#10095;</a>
            </div>
        );
    }
} 