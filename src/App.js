import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';

import './index.css'

import Homepage from './Homepage';

import CrystalFrontiers from './components/pages/CrystalFrontiers'

class App extends PureComponent {

    render() {
        return (
            <div className='wrapper-index'>
                <Header />
                <Homepage />
            </div>
        );
    };
};

export default App;
