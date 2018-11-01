import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Friends from '../friends/Friends';
import Login from '../login/Login';
import Register from '../register/Register';
import Schedule from '../schedule/Schedule';
import Search from '../search/Search';
import Settings from '../settings/Settings';

class Main extends React.Component {
  public render() {
    return (
            <div>
                <Switch>
                    <Route exact={true} path='/friends'  component={Friends}/>
                    <Route exact={true} path='/schedule'  component={Schedule}/>
                    <Route exact={true} path='/search'  component={Search}/>
                    <Route exact={true} path='/settings'  component={Settings}/>
                    <Route exact={true} path='/login'  component={Login}/>
                    <Route exact={true} path='/register'  component={Register}/>
                    <Route component={Login}/>
                </Switch>
            </div>
    );
  }
}

export default Main;
