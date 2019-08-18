import React, { PureComponent } from 'react';

import './index.css'

import Header from'./components/Header/Header';

class App extends PureComponent {

    render() {
        return (
            <div className='wrapper-index'>
                <Header />
            </div>
        );
    };
};

export default App;
