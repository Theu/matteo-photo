import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends PureComponent {

    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
    }

    render() {
        const {
            index,
            imgSrc,
            alt,
            title
        } = this.props;

        return (    
            <img 
                key={index}
                src={imgSrc}
                alt={alt} 
                title={title}
                className='display-image'
            />
        )
    };
};

export default Image;