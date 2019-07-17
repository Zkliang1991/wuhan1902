import { axios } from "../../utils";

export const SETSONGSHEETOPEN = 'setSongSheetOpen';

export const setSongSheetOpen = () => {
    return {
        type: SETSONGSHEETOPEN
    }
}

export const SETSHEET = 'setSheet';
export const setSheet = (arr) => {
    if (arr) {
        return {
            type: SETSHEET,
            arr
        }
    } else {
        return {
            type: SETSHEET,
            arr: []
        }
    }

}

export const GETSHEET = 'getSheet';

export async function getSheet({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb()
    }
    return {
        type: GETSHEET,
        sheet: res.data.data
    }
}

export const SETSHEETDATA = 'setSheetData';

export const setSheetData = (data) => {
    return {
        type: SETSHEETDATA,
        data
    }
}