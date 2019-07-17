import { axios } from "../../utils";

import { Toast } from 'antd-mobile';

export const SETSONGLISTOPEN = 'setSongListOpen';

export const setSongListOpen = () => {
    return {
        type: SETSONGLISTOPEN
    }
}

export const SETPLAYLIST = 'setPlayList';

export async function setPlayList({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb();
    }
    return {
        type: SETPLAYLIST,
        playList: res.data.data
    }
}

export const ADDPLAYLIST = 'addPlayList';

export async function addPlayList({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (!!res.data.type) {
        if (cb) {
            cb();
        }
        Toast.success(res.data.msg, 1);
        return {
            type: SETPLAYLIST,
            playList: res.data.data
        }
    } else {
        Toast.fail(res.data.msg, 1);
        return {
            type: ADDPLAYLIST
        }
    }

}

export const DISPLAYLIST = 'disPlayList';

export async function disPlayList({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (!!res.data.type) {
        if (cb) {
            cb();
        }
        Toast.success(res.data.msg, 1);
        return {
            type: SETPLAYLIST,
            playList: res.data.data
        }
    } else {
        Toast.fail(res.data.msg, 1);
        return {
            type: DISPLAYLIST
        }
    }
}


export const DISALLPLAYLIST = 'disAllPlayList';

export async function disAllPlayList({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb();
    }
    Toast.success(res.data.msg, 1);
    return {
        type: SETPLAYLIST,
        playList: []

    }
}


export const ADDALLPLAY = 'addAllPlay';

export async function addAllPlay({ url, params }, cb) {
    var res = await axios.post(url, params);
    if (!!res.data.type) {
        if (cb) {
            cb();
        }
        Toast.success(res.data.msg, 1);
        return {
            type: SETPLAYLIST,
            playList: res.data.data
        }
    }
}
