
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
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            id: ''
        }
    }
    
    static propTypes = {
        imagesHp: PropTypes.array,
        readPageLocation: PropTypes.func
    };

    readPageLocation = event => {
        this.setState({location: event.currentTarget.dataset.serie});
        this.props.getLocation(event.currentTarget.dataset.serie)
        
    }

    defineFirstImageToShow = event => {
        this.setState({location: event.currentTarget.dataset.id});
        this.props.getImage(event.currentTarget.dataset.id)
    }
    
    // onClick(event)

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
function mapStateToProps(state) {
    return state
}
const mapDispatchToProps = {
    getLocation,
    getImage
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageGrid);