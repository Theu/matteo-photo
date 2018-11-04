
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocation } from '../../redux/actions/actionCreators.js';


import GridItem from './GridItem';

import { imagesHp } from '../../images/index';

class HomePageGrid extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }
    
    static propTypes = {
        imagesHp: PropTypes.array,
        readPageLocation: PropTypes.func
    };

    readPageLocation = (e) => {
        this.setState({location: e.currentTarget.dataset.name});
        this.props.getLocation(e.currentTarget.dataset.name)
        
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
function mapStateToProps(state) {
    return state
}
const mapDispatchToProps = {
    getLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageGrid);