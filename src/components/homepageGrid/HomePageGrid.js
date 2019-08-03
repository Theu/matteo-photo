
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

class HomePageGrid extends PureComponent {
    static propTypes = {
        imagesHp: PropTypes.array,
        readPageLocation: PropTypes.func
    };

    readPageLocation = event => {
        this.props.getLocation(event.currentTarget.dataset.serie)
    }

    defineFirstImageToShow = event => {
        this.props.getImage(event.currentTarget.dataset.id)
    }
    
    render() {
        return (    
            imagesHp.map((key, index) => {
                return (
                    <div 
                        onClick={(event) => {
                            this.readPageLocation(event);
                            this.defineFirstImageToShow(event)
                        }}
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
};

const mapDispatchToProps = {
    getLocation,
    getImage
};

export default connect(null, mapDispatchToProps)(HomePageGrid);