import { SETSONGLISTOPEN, SETPLAYLIST } from "../actions";


const defaultState = {
    songListOpen: false,
    playList: []
}

export const songlist = (state = defaultState, action) => {
    switch (action.type) {
        case SETSONGLISTOPEN:
            return { ...state, songListOpen: !state.songListOpen };
            break;
        case SETPLAYLIST:
            return { ...state, playList: action.playList };
            break;
        default:
            return state;
            break;
    }
}