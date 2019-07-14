import { CHANGECLASSNAME } from "../actions";


const defaultState = {
    className:{
        className1:"shadowHide",
        className2:"ActivityHide"
    }
}

export const className=(state=defaultState,action)=>{
    switch (action.type) {
        case CHANGECLASSNAME:
            return {...state,className:action.className};
            break;

        default:
            return state;
            break;
    }
}