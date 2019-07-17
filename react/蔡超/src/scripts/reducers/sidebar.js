
import { SETSIDEBAROPEN } from '../actions';

const defalutState = {
    sidebarOpen: false
}

export const sidebar = (state = defalutState, action) => {
    switch (action.type) {
        case SETSIDEBAROPEN:
            return { ...state, sidebarOpen: !state.sidebarOpen };
            break;
        default:
            return state;
            break;
    }
}