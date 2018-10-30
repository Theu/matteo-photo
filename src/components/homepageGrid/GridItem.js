import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './gridItem.css';

class GridItem extends PureComponent {

    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string
    }

    render() {
        const {
            src,
            alt,
            title,
            name
        } = this.props;

        return (
            <div
                className='image'>
                <img 
                    src={src} 
                    alt={alt} 
                    title={title}
                    name={name}
                    className='image' />
            </div>
            
        );
    };
};

export default GridItem;