import { SETTAB, SETNEWURL, SETOLDURL } from "../actions";



const defaultState = {
    oldUrl:'',
    newUrl:'',
    tab:'home'
}

export const myUrl = (state=defaultState,action)=>{
    switch(action.type){
        case SETTAB:
        return {...state,tab:action.tab};
        break;

        case SETNEWURL:
        return {...state,newUrl:action.url}
        break;

        case SETOLDURL:
        return {...state,oldUrl:action.url}
        break;

        default:
        return state;
        break;
    }
}

