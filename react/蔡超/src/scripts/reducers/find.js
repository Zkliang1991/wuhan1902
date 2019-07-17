
import { GETBANNER, GETHIGHLIST, GETHOTLIST, GETNEWLIST } from '../actions'

const defalutState = {
    banner: [],
    highList: [],
    hotList: [],
    newList: []
}

export const find = (state = defalutState, action) => {
    switch (action.type) {
        case GETBANNER:
            return { ...state, banner: action.data };
            break;
        case GETHIGHLIST:
            return { ...state, highList: action.list }
            break;
        case GETHOTLIST:
            return { ...state, hotList: action.list };
            break;
        case GETNEWLIST:
            return { ...state, newList: action.list };
            break;
        default:
            return state
            break;
    }
} 