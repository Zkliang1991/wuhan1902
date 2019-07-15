
import {combineReducers} from "redux"

import {test} from "./test"
import {data} from "./data"
export const reducers=combineReducers({
    test,
    data
})