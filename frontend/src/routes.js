import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './view/login';
import NewUser from './view/newUser';
import Inicial from './view/inicial';
import Profile from './view/profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicial} />
                <Route path="/login" component={Login} />
                <Route path="/newuser" component={NewUser} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}