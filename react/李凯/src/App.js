import React from 'react';
// import '@/App.css';
import { Component } from 'react';
import {axios} from "@/utils";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Guide from './scripts/views/guide';
import Lyra from "./scripts/views/app";
import Search from "./scripts/views/search";
import Login from "./scripts/views/login";
import ActivityDetail from './scripts/views/activityDetail';
import Collect from './scripts/views/collect';


function App() {
  return (
    <Router basename="/">
      <div id="main" >
        <Route component={Layout} />
      </div>
    </Router>
  );
}

class Layout extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Guide} exact />
        <Route path="/guide" component={Guide} />
        <Route path="/lyra" component={Lyra} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/activityDetail" component={ActivityDetail} />
        <Route path="/collect" component={Collect} />
        <Route render={() => <Redirect to="/lyra/home" />} />
      </Switch>
    );
  }
}


export default App;
