import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './gridItem.css';

class GridItem extends PureComponent {

    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        getGalleryName: PropTypes.func
    }

    render() {
        const {
            src,
            alt,
            title,
            name,
            getGalleryName
        } = this.props;

        return (
            <div
                onClick={getGalleryName}
                className='grid-item-wrapper'>
                <img 
                    src={src} 
                    alt={alt} 
                    title={title}
                    name={name}
                    className='grid-item-wrapper' />
            </div>
            
        );
    };
};

export default GridItem;