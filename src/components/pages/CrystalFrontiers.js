import React, { Component } from 'react';
import Slider from '../slider/Slider';

import './gallery.css';

class CrystalFrontiers extends Component {
    render() {
        return (
            <div className='gallery-wrapper'>
                <Slider />
            </div>
        );
    }
}


export default CrystalFrontiers;