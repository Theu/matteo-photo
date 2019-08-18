import React, { PureComponent } from 'react';

import HomePageGrid from './components/homepageGrid/HomePageGrid';

import './homepage.css';


class Homepage extends PureComponent {
  render() {
    return (
      <div className='container-homepage'>
        <div className="wrapper-homepage">  
            <HomePageGrid />
          </div>
      </div>
    );
  }
}

export default Homepage;
