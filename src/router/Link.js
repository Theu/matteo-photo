import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Link extends Component {

    static propTypes = {
        to: PropTypes.string.isRequired
    }

    render() {
        return (
            <a
                href='#'
                onClick={this.handleClick}
            >
                {this.props.children}
            </a>
            );
    };

    handleClick = (event) => {
        event.preventDefault();
        history.pushState(null, '')
    }
}