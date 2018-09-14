import * as React from 'react';
import { Route, Switch } from 'react-router-dom'

import Friends from '../friends/friends';
import Login from '../login/login';
import Register from '../register/register';
import Schedule from '../schedule/schedule';
import Search from '../search/search';
import Settings from '../settings/settings';

class Main extends React.Component {
    public render() {

        return (
            <div>
                <Switch>
                    <Route exact={true} path='/friends' component={Friends}/>
                    <Route exact={true} path='/schedule' component={Schedule}/>
                    <Route exact={true} path='/search' component={Search}/>
                    <Route exact={true} path='/settings' component={Settings}/>
                    <Route exact={true} path='/login' component={Login}/>
                    <Route exact={true} path='/register' component={Register}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default Main;