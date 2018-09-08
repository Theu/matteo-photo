
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import GridItem from './GridItem';

import { imagesHp } from '../../images/index';

class HomePageGrid extends PureComponent {
    
    static propTypes = {
        imagesHp: PropTypes.array
    };
    
    render() {

        return (
            imagesHp.map((key, index) => {
                return (
                    <GridItem
                        key={index} 
                        src={key.imgSrc}
                        alt={key.title}
                        title={key.title}
                    />
                )
            })
            
        )
    }
};

export default HomePageGrid;