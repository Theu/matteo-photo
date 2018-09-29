
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import GridItem from './GridItem';

import { imagesHp } from '../../images/index';

const baseUrl = 'http://www.matteocontini.com/'

class HomePageGrid extends PureComponent {
    
    static propTypes = {
        imagesHp: PropTypes.array
    };
    
    render() {


        return (
            
            imagesHp.map((key, index) => {
                return (
                    <Link to={`${key.serie}`}>
                        <GridItem
                            key={index} 
                            src={key.imgSrc}
                            alt={key.title}
                            title={key.title}
                            name={key.name}
                            getGalleryName={() => {this.getName}}
                        />
                    </Link>
                )
            })
            
        )
    }
    getName = (event) => {
        console.log('PASSO', event.target.name);
    }
};

export default HomePageGrid;