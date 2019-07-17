
import { GETLIKESHEET, GETCOLLECT } from '../actions'

const defalutState = {
    likeSheet: [],
    collect: []
}


export const home = (state = defalutState, action) => {
    switch (action.type) {
        case GETLIKESHEET:
            return { ...state, likeSheet: action.list }
            break;
        case GETCOLLECT:
            return { ...state, collect: action.list }
            break;
        default:
            return state
            break;
    }
}