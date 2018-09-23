import * as React from 'react';

import Header from './containers/header/header';
import Main from './containers/main/main';


import './App.css';

import "normalize.css";


class App extends React.Component {
  public render() {
    return (
        <div>
      <Header />
      <Main />
        </div>
    );
  }
}

export default App;
