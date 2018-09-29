import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter as Router,
    Route,
    Switch, 
} from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

import './index.css'

import Header from './components/Header/Header';
import Homepage from './Homepage';
import CrystalFrontiers from './components/pages/CrystalFrontiers';
import NewYork from './components/pages/NewYork'

render(
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/crystalFrontiers" component={CrystalFrontiers} />
                <Route path="/NewYork" component={NewYork} />
            </Switch>
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
