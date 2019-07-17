import React, { Component } from 'react';
import { HashRouter as Hash, Switch, Route } from 'react-router-dom';
import App from './views/app';
export class AllView extends Component {
    render() {
        return (
            <Hash basename='/'>
                <Switch>
                    <Route path='/' render={
                        (props) => <App {...props} />
                    } exact />
                    <Route path='/app' render={
                        (props) => <App {...props} />
                    } />
                </Switch>
            </Hash>
        )
    }
}