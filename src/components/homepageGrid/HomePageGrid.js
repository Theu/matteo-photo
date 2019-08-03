
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    getLocation,
    getImage
 } from '../../redux/actions/actionCreators.js';


import GridItem from './GridItem';

import { imagesHp } from '../../images/index';

export const HomePageGrid = ({ getLocation, getImage }) => {
    const readPageLocation = event => {
        getLocation(event.currentTarget.dataset.serie);
        getImage(event.currentTarget.dataset.id);
    }
    
    return (    
        imagesHp.map((key, index) => {
            return (
                <div 
                    onClick={readPageLocation}
                    key={index}
                    data-serie={key.serie}
                    data-id={key.id}
                >
                <Link 
                    to={`${key.serie}`} 
                    
                >
                    <GridItem     
                        src={key.imgSrc}
                        alt={key.title}
                        title={key.title}
                        name={key.name}
                    />
                </Link>
                </div>
            )
        })
        
    )
}

HomePageGrid.propType = {
    imagesHp: PropTypes.array,
    readPageLocation: PropTypes.func
}

const mapDispatchToProps = {
    getLocation,
    getImage
};

export default connect(null, mapDispatchToProps)(HomePageGrid);