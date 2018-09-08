import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './imageGridItem.css';

class ImageGridItem extends PureComponent {

    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string
    }

    render() {
        const {
            src,
            alt,
            title
        } = this.props;

        return (
            <img 
                src={src} 
                alt={alt} 
                tiytle={title}
                className='grid-item-wrapper' />
        );
    };
};

export default ImageGridItem;