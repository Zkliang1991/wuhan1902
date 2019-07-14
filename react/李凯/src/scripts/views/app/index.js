import "./index.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "../home";
import { Foot } from "../../components/foot";
import Find from "../find";
import Activity from "../activity";
import Tool from "../tool";
import Mine from "../mine";

class Lyra extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/lyra" component={Home} exact />
          <Route path="/lyra/home" component={Home} />
          <Route path="/lyra/find" component={Find} />
          <Route path="/lyra/activity" component={Activity} />
          <Route path="/lyra/tool" component={Tool} />
          <Route path="/lyra/mine" component={Mine} />         
          <Route render={() => <Redirect to="/lyra/home" />} />
        </Switch>
        <Foot />
      </div>
    );
  }
}

export default Lyra;
