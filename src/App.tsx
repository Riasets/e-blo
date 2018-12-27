import * as React from 'react';

import Header from './containers/header/Header';
import Main from './containers/main/Main';

import 'normalize.css';

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
