import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

import './index.css'

import Homepage from './Homepage';
import Header from './components/Header/Header';

render(
    <Router>
    <div className='wrapper-index'>
        <Header />
        <Homepage />
    </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
