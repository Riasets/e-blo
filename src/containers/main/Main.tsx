import * as React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from "react-redux";

import Friends from '../friends/Friends';
import Login from '../login/Login';
import Register from '../register/Register';
import Schedule from '../schedule/Schedule';
import Search from '../search/Search';
import Settings from '../settings/Settings';
import PrivateRoute from '../../HOCs/PrivateRoute';

import IMain from  './Main.d';

class Main extends React.Component<IMain> {
  public render() {
    console.log(this.props.AuthInfo.logged, !this.props.AuthInfo.logged);
    return (
            <div>
                <Switch>
                    <PrivateRoute
                      exact={true}
                      path='/friends'
                      component={Friends}
                      otherPath='/login'
                      auth={this.props.AuthInfo.logged}
                    />
                    <PrivateRoute
                      exact={true}
                      path='/schedule'
                      component={Schedule}
                      otherPath='/login'
                      auth={this.props.AuthInfo.logged}
                    />
                    <PrivateRoute
                      exact={true}
                      path='/search'
                      otherPath='/login'
                      auth={this.props.AuthInfo.logged}
                      component={Search}/>
                    <PrivateRoute
                      exact={true}
                      path='/settings'
                      otherPath='/login'
                      auth={this.props.AuthInfo.logged}
                      component={Settings}/>
                    <PrivateRoute
                      exact={true}
                      path='/login'
                      otherPath='/schedule'
                      auth={!this.props.AuthInfo.logged}
                      component={Login}/>
                    <PrivateRoute
                      exact={true}
                      path='/register'
                      otherPath='/schedule'
                      auth={!this.props.AuthInfo.logged}
                      component={Register}
                    />
                    <PrivateRoute
                      component={Login}
                      otherPath='/schedule'
                      auth={!this.props.AuthInfo.logged}
                    />
                </Switch>
            </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { AuthInfo:
      { logged: state.Auth.logged } };
}

export default connect(mapStateToProps)(Main);
