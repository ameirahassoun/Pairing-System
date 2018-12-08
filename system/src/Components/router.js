import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './add.js';
import Pairing from './pairing.js'
import History from './history.js'


class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/add' component={Add} />
                    <Route exact path='/pairing' component={Pairing} />
                    <Route exact path='/history' component={History} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;