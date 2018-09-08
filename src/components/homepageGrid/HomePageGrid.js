
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ImageGridItem from './ImageGridItem';
import TextGridItem from './TextGridItem'

import { imagesHp } from '../../images/index';
import { textsHp } from '../../text/index';

import './homePageGrid.css'

const homePageElements = [...imagesHp, ...textsHp]

class HomePageGrid extends PureComponent {
    
    static propTypes = {
        imagesHp: PropTypes.array,
        textsHp: PropTypes.array,
        homePageElements: PropTypes.array,
        isImage: PropTypes.func
    };
    
    

    render() {
        console.log('homePageElements :', homePageElements);
        
        return (
            homePageElements.map((key, index) => {
                const isImage = key.hasOwnProperty('imgSrc');
                const isText = key.hasOwnProperty('content')
                console.log('isImage :', isImage);
                return (
                    <div 
                        key={index}
                        className='home-page-grid-item-wrapper'
                    >
                        {isImage &&
                            <ImageGridItem
                                src={key.imgSrc}
                                alt={key.title}
                                title={key.title}
                            />
                        }
                        {isText &&
                            <TextGridItem
                                title={key.title}
                                content={key.content}
                            />
                        }
                    </div>
                )
            })
            
        )
    }
};

export default HomePageGrid;