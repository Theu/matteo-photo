import React, { PureComponent } from 'react';

import HomePageGrid from './components/homepageGrid/HomePageGrid';

import './homepage.css';


class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <HomePageGrid />
      </div>
    );
  }
}

export default App;
