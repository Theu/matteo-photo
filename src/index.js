import React from 'react';
import { render } from 'react-dom';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


// import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';

import './index.css'

import Header from './components/Header/Header';
import Homepage from './Homepage';
// import CrystalFrontiers from './components/pages/CrystalFrontiers';
import Gallery from './components/pages/Gallery';
// import NewYork from './components/pages/NewYork'

// import { imagesHp } from './images/index';
// console.log('imagesHp', imagesHp)

const pages = ['crystalFrontiers', 'NewYork']
const { store, persistor } = configureStore();

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/crystalFrontiers" component={Gallery} />
                        <Route path="/NewYork" component={Gallery} />
                    </Switch>
                </div>
            </Router>
        </PersistGate>
    </Provider>
    , document.getElementById('root')
);
// registerServiceWorker();
