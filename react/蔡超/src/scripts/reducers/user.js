
import { SETUSEROPEN, SETCHECKED } from '../actions'


const defalutState = {
    userOpen: false,
    checked: false,
}

export const user = (state = defalutState, action) => {
    switch (action.type) {
        case SETUSEROPEN:
            return { ...state, userOpen: !state.userOpen };
            break;
        case SETCHECKED:
            return { ...state, checked: !state.checked };
            break;
        default:
            return state;
            break;
    }
}