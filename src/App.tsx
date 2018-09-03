import * as React from 'react';

import Header from './components/header/header';
import Main from './components/main/main';

import './App.css';




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
