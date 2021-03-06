import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { 
    getLocation,
    getImage
} from '../../redux/actions/selectors';

import LightBox from '../lightBox/LightBox';

import imagesForHpAndGalleries from '../../images/index';
import './gallery.css';

class Gallery extends Component {
    state = {
        images: imagesForHpAndGalleries
            .filter(object => object.serie === this.props.locationToLoad),
        currentIndex: imagesForHpAndGalleries
            .filter(object => object.serie === this.props.locationToLoad)
            .findIndex(element => element.id === this.props.imageToStart),
        translateValue: 0
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
    
    render() {
        const {
            locationToLoad
        } = this.props;
        const imageSet = this.state.images;
        const imageIndex = this.state.currentIndex;

        const galleryName = this.transformLocationToGalleryName(locationToLoad)

        return (
            <div>
                <div className='header-wrapper gallery'>
                    <div className='header-container'>
                        {galleryName}
                    </div>
                </div>    
                <LightBox
                    prevSlide={this.prevSlide}
                    nextSlide={this.nextSlide}
                    imgSrc={`${imageSet[imageIndex].gallerySrc}`}
                    title={imagesForHpAndGalleries[imageIndex].title}
                    alt={imagesForHpAndGalleries[imageIndex].title} 
                />
            </div>
        );
    }

    prevSlide = () => {
        console.log('PREV');
        (this.state.currentIndex === 0) 
            ? this.setState({ currentIndex: 0 }) 
            : this.setState((previousIndex) => ({ currentIndex: previousIndex.currentIndex - 1 }))
    }

    nextSlide = () => {
        console.log('NEXT');
        (this.state.currentIndex === (this.state.images.length - 1)) 
            ? this.setState({ currentIndex: 0 }) 
            : this.setState((previousIndex) => ({ currentIndex: previousIndex.currentIndex + 1 }))
    }

    transformLocationToGalleryName = (string) => (
        string
            .split('-')
            .join(' ')
            .toUpperCase()
    );
}

function mapStateToProps(state) {
    return {
      locationToLoad: getLocation(state),
      imageToStart: getImage(state)
    };
}

export default connect(mapStateToProps)(Gallery);
