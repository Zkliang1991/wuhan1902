import { axios } from "../../utils";

export const GETBANNER = 'getBanner';

export async function getBanner({ url }) {
    var res = await axios.get(url);
    return {
        type: GETBANNER,
        data: res.data.data
    }
}

export const GETHIGHLIST = 'getHighList';

export async function getHighList({ url, params }, cb) {
    if (url == '') {
        return {
            type: GETHIGHLIST,
            list: []
        }
    }
    var res = await axios.get(url, { params });
    if (cb) {
        cb();
    }
    return {
        type: GETHIGHLIST,
        list: res.data.data
    }
}

export const GETHOTLIST = 'getHotList';

export async function getHotList({ url, params }, cb) {
    if (url == '') {
        return {
            type: GETHOTLIST,
            list: []
        }
    }
    var res = await axios.get(url, { params });
    if (cb) {
        cb()
    }
    return {
        type: GETHOTLIST,
        list: res.data.data
    }
}

export const GETNEWLIST = 'getNEWLIST';

export async function getNewList({ url, params }, cb) {
    if (url == '') {
        return {
            type: GETNEWLIST,
            list: []
        }
    }
    var res = await axios.get(url, { params });
    if (cb) {
        cb()
    }
    return {
        type: GETNEWLIST,
        list: res.data.data
    }
}