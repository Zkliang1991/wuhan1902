import { SETSEARCHOPEN, GETSEARCHLIST, SETPAGENUM, SETSEARCHLIST, SETSEARCHVALUE } from '../actions';

const defalutState = {
    searchOpen: false,
    searchList: [],
    pageNum: 0,
    searchValue: ''
}

export const search = (state = defalutState, action) => {
    switch (action.type) {
        case SETSEARCHOPEN:
            return { ...state, searchOpen: !state.searchOpen };
            break;
        case GETSEARCHLIST:
            return { ...state, searchList: action.list }
            break;
        case SETPAGENUM:
            return { ...state, pageNum: action.num }
            break;
        case SETSEARCHLIST:
            return { ...state, searchList: [] }
            break;
        case SETSEARCHVALUE:
            return { ...state, searchValue: action.value }
            break;
        default:
            return state;
            break;
    }
}