import { GETTABS, TABSLIST, SETTABLIST } from "../actions";



const defaultState = {
    tabs: [],
    tabsList: []
}

export const dynamic = (state = defaultState, action) => {
    switch (action.type) {
        case GETTABS:
            return { ...state, tabs: action.tabs }
            break;
        case TABSLIST:
            return { ...state, tabsList: action.list }
            break;
        case SETTABLIST:
            return { ...state, tabsList: action.arr }
            break;
        default:
            return state
            break;
    }
}