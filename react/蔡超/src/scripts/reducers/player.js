import { SETPLAY, SETTIME, SETPLAYNUM, SETPLAYNUMADD, SETPLAYNUMCUT, SETREADYTIME, SETLOADTEXT, SETPLAYED, SETPLAYID } from "../actions/player";



const defaultState = {
    time: 10,
    readytime: 0,
    play: false,
    playNum: 0,
    loadtext: '',
    played: 0,
    playId: null
}

export const player = (state = defaultState, action) => {
    switch (action.type) {
        case SETPLAY:
            return { ...state, play: action.play ? action.play : !state.play };
            break;
        case SETTIME:
            return { ...state, time: action.time };
            break;
        case SETREADYTIME:
            return { ...state, readytime: action.time };
            break;
        case SETPLAYNUM:
            return { ...state, playNum: action.num };
            break;
        case SETPLAYNUMADD:
            return { ...state, playNum: ++state.playNum };
            break;
        case SETPLAYNUMCUT:
            return { ...state, playNum: --state.playNum };
            break;
        case SETLOADTEXT:
            return { ...state, loadtext: action.text };
            break;
        case SETPLAYED:
            return { ...state, played: action.time };
            break;
        case SETPLAYID:
            return { ...state, playId: action.id }
            break;
        default:
            return state;
            break;
    }
}