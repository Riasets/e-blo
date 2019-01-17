import * as React from 'react';

import Header from './containers/header/Header';
import Main from './containers/main/Main';
import { IApp } from './App.d';
import 'normalize.css';
import { withRouter } from "react-router";

class App extends React.Component<IApp> {
  public render() {
    return (
        <div>
      <Header />
      <Main location={this.props.location}/>
        </div>
    );
  }
}

// @ts-ignore
export default withRouter(App);
