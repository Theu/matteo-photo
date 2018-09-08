import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './gridItem.css';

class GridItem extends PureComponent {

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
            <div className='grid-item-wrapper'>
            <img 
                src={src} 
                alt={alt} 
                title={title}
                className='grid-item-wrapper' />
        </div>
        );
    };
};

export default GridItem;