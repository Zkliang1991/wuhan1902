
import { SETLOGINOPEN, SETCOUNT, SETFLAG, SETDISABLED, SETMOBILE, SETCODE } from '../actions'

const defalutState = {
    loginOpen: false,
    flag: true,
    vcode: '获取验证码',
    count: 60,
    disabled: true,
    mobile: null,
    code: null
}


export const login = (state = defalutState, action) => {
    switch (action.type) {
        case SETLOGINOPEN:
            return { ...state, loginOpen: !state.loginOpen }
            break;
        case SETCOUNT:
            return { ...state, count: action.count };
            break;
        case SETFLAG:
            return { ...state, flag: action.flag };
            break;
        case SETDISABLED:
            return { ...state, disabled: action.disabled };
            break;
        case SETMOBILE:
            return { ...state, mobile: action.mobile };
            break;
        case SETCODE:
            return { ...state, code: action.code };
            break;
        default:
            return state;
            break;
    }
}