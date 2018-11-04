
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { readLocation } from '../../redux/actions/index';


import GridItem from './GridItem';

import { imagesHp } from '../../images/index';

class HomePageGrid extends PureComponent {
    
    static propTypes = {
        imagesHp: PropTypes.array,
        readPageLocation: PropTypes.func
    };

    readPageLocation = (e) => {
        console.log('ECCOMI', e.currentTarget.dataset.name);
    }
    
    

    render() {

        return (
            
            imagesHp.map((key, index) => {
                return (
                    <div 
                        onClick={this.readPageLocation}
                        key={index}
                        data-name={key.serie}
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