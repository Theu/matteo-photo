
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { readLocation } from '../../actions';


import GridItem from './GridItem';

import { imagesHp } from '../../images/index';

class HomePageGrid extends PureComponent {
    
    static propTypes = {
        imagesHp: PropTypes.array,
        readPageLocation: PropTypes.func
    };

    readPageLocation = () => {
        console.log('ECCOMI');
    }
    
    

    render() {
        
        const { readPageLocation } = this.props

        console.log('props from App: ', this.props)

        return (
            
            imagesHp.map((key, index) => {
                return (
                    <div 
                        onClick={this.readPageLocation}
                        key={index}
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

export default connect()(HomePageGrid);