

import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import {Guide} from "./guide";
import {IndexApp} from "./app/index";
import Login from './login';
import {Submit} from "./submit"
import { Search } from './search';
import {Detailed} from "./detailed";
import { AddSubject } from './addsubject';
import {Grade} from "./grade"
import { Analyse } from './analyse';
export  class IndexViews extends Component {
    render() {
        return (
                 <Switch>
                    <Route path="/" component={Guide} exact/>
                    <Route path="/guide" component={Guide}/>
                    <Route path="/app" component={IndexApp}/>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/submit" component={Submit}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route path="/detailed/:_id" component={Detailed}></Route>
                    <Route path="/addsubject" component={AddSubject}></Route>
                    <Route path="/grade" component={Grade}></Route>
                    <Route path="/analyse" component={Analyse}></Route>
                    <Route
                    render={
                        ()=>(
                            <Redirect to="/guide"/>    
                        )
                    }
                />
                </Switch>
           
        )
    }
}
