import {combineReducers} from "redux";
import { data } from "./data";
import { className } from "./className";

export const reducers = combineReducers({
    data:data,
    className:className
})