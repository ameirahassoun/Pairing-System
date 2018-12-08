import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './add.js';
import Pairing from './pairing.js'
import History from './history.js'
import Home from './home';

class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component= {Home} />
                    <Route exact path='/addStudent' component={Add} />
                    <Route exact path='/pairing' component={Pairing} />
                    <Route exact path='/history' component={History} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;