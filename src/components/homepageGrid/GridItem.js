import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
            <div>
            <img 
                src={src} 
                alt={alt} 
                title={title} />
        </div>
        );
    };
};

export default GridItem;