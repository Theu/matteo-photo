import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from './Image';

import { 
    getLocation,
    getImage
 } from '../../redux/actions/selectors';

import { imagesHp } from '../../images/index';

import './lightbox.css';

class Slider extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            images: imagesHp.filter(object => object.serie === this.props.locationToLoad),
            currentIndex: imagesHp.filter(object => object.serie === this.props.locationToLoad).findIndex(element => element.id === this.props.imageToStart),
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
        (this.state.currentIndex === (this.state.images.length - 1)) ? 
            this.setState({ currentIndex: 0 }) : 
            this.setState((previousIndex) => ({ currentIndex: previousIndex.currentIndex + 1 }))
    }
    
    

    render() {
        const imageSet = this.state.images;
        const imageIndex = this.state.currentIndex;

        return (
            <div>
                <a className='prev' onClick={this.prevSlide}>&#10094;</a>    
                    <div className='display-image'>
                        <Image
                            imgSrc={`http://localhost:3000/${imageSet[imageIndex].imgSrc}`}
                            title={imagesHp[imageIndex].title}
                            alt={imagesHp[imageIndex].title}
                        />
                    </div>               
                <a className='next' onClick={this.nextSlide}>&#10095;</a>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
      locationToLoad: getLocation(state),
      imageToStart: getImage(state)
    };
  }

export default connect(mapStateToProps)(Slider)