

import {combineReducers} from "redux";
import { data } from "./data";
import { myUrl } from "./url";

export const reducers = combineReducers({
    data:data,
    myUrl:myUrl
})