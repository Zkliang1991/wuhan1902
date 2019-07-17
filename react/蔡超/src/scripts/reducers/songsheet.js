
import { SETSONGSHEETOPEN, GETSHEET, SETSHEETDATA, SETSHEET } from '../actions';

const defaultState = {
    songSheetOpen: false,
    sheet: [],
    sheetData: '',
    count: 0
}


export const songsheet = (state = defaultState, action) => {
    switch (action.type) {
        case SETSONGSHEETOPEN:
            return { ...state, songSheetOpen: !state.songSheetOpen }
            break;
        case SETSHEET:
            return { ...state, sheet: action.arr }
            break;
        case GETSHEET:
            return { ...state, sheet: action.sheet };
            break;
        case SETSHEETDATA:
            return { ...state, sheetData: action.data };
            break;
        default:
            return state
            break;
    }
}