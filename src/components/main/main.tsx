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
                    <Route path='/friends' component={Friends}/>
                    <Route path='/schedule' component={Schedule}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </div>
        );
    }
}

export default Main;