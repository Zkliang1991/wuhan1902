import { GETLYRAS, GETNEWS, GETSEARCHLYRAS,UPLOADIMG } from "../actions";

const defaultState = {
    lyras:[],
    news:[],
    searchLyras:[],
    userPic:""
}

export const data = (state=defaultState,action)=>{
    switch (action.type) {

        case GETLYRAS:
            return {...state,lyras:action.lyras};
            break;

        case GETNEWS:
            return {...state,news:action.news};
            break;

        case GETSEARCHLYRAS:
            return {...state,searchLyras:action.data};
            break;
        
        case UPLOADIMG:
            return {...state,userPic:action.userPic}
            break;

        default:
            return state;
            break;
    }
}