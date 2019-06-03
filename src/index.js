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

import Gallery from './components/pages/Gallery';
import { imagesHp } from './images/index';


const { store, persistor } = configureStore();

const pages = imagesHp.map(series => {
    return series.serie;
})

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        {
                            pages.map((path, index) => {
                                return (
                                    <Route key={index} path={`/${path}`} component={Gallery} />
                                )
                            })
                        }
                    </Switch>
                </div>
            </Router>
        </PersistGate>
    </Provider>
    , document.getElementById('root')
);
