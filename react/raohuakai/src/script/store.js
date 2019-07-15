

import {createStore,applyMiddleware} from "redux";
import {reducers} from "./reducers";

import promise from "redux-promise";
import  thunk from "redux-thunk" 
const store=createStore(reducers,applyMiddleware(thunk,promise));

export default store;