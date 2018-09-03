import * as React from 'react';
import { Route, Switch } from 'react-router-dom'

import Login from '../login/login';
import Register from '../register/register';

class Main extends React.Component {
    public render() {
        return (
            <div>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </div>
        );
    }
}

export default Main;