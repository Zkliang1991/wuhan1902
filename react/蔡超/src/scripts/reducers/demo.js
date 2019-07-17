import { SETTOKEN, SETUSERNAME, SETUSERIMG } from '../actions'

const defalutState = {
    token: '',
    username: '',
    userImg: ''
}

export const demo = (state = defalutState, action) => {
    switch (action.type) {
        case SETTOKEN:
            return { ...state, token: action.token };
            break;
        case SETUSERNAME:
            return { ...state, username: action.username };
            break;
        case SETUSERIMG:
            return { ...state, userImg: action.img };
            break;
        default:
            return state;
            break;
    }
}