import React ,{Component} from 'react';
import { HashRouter as Hash,Route } from "react-router-dom";
import {IndexViews} from "./views";
import {Provider } from "react-redux";
import store from "./store";
import $axios from "axios";
Component.prototype.$axios=$axios;
// import { StoreIndex } from "./redux";
export class App extends  Component{
  render(){
    return (
      <div className="App">
        <Provider store={store}>
        <Hash basename="/">
            {/* <Route component={StoreIndex}></Route> */}
              <Route  component={IndexViews}></Route>
          </Hash>
        </Provider>
         
      </div>
    );
  }
} 
