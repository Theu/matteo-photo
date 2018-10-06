
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={`${key.serie}`} key={index}>
                        <GridItem     
                            src={key.imgSrc}
                            alt={key.title}
                            title={key.title}
                            name={key.name}
                        />
                    </Link>
                )
            })
            
        )
    }
};

export default HomePageGrid;