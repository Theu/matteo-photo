import React, { PureComponent } from 'react';

import './index.css'

import Homepage from './Homepage';

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
