import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './imageGridItem.css';

class TextGridItem extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string
    }

    render() {
        const {
            title,
            content
        } = this.props;

        return (
            <div className='grid-item-wrapper'>
            <p>
                {title}
            </p>
            <p>
                {content}
            </p>
        </div>
        );
    };
};

export default TextGridItem;