
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
            imagesHp.map(key => {
                return (
                    <GridItem
                        key={key.title} 
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