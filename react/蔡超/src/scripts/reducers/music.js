import { SETMUSICOPEN, SETLYRIC, SETLYRICTOP, SETLYRICLIST, SETLYRICNUM } from "../actions";


const defaultState = {
    musicOpen: false,
    lyric: false,
    lyricTop: 0,
    lyricList: [],
    lyricNum: 0
}

export const music = (state = defaultState, action) => {
    switch (action.type) {
        case SETMUSICOPEN:
            return { ...state, musicOpen: !state.musicOpen };
            break;
        case SETLYRIC:
            return { ...state, lyric: action.bul };
            break;
        case SETLYRICTOP:
            return { ...state, lyricTop: action.str };
            break;
        case SETLYRICLIST:
            return { ...state, lyricList: action.list };
            break;
        case SETLYRICNUM:
            return { ...state, lyricNum: action.num };
            break;
        default:
            return state;
            break;
    }
}