
import { axios } from '@/utils';

import { Toast } from 'antd-mobile';

export const GETLIKESHEET = 'getLikeSheet';

export async function getLikeSheet({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb()
    }
    return {
        type: GETLIKESHEET,
        list: res.data.data
    }
}

export const ADDLIKESHEET = 'addLikeSheet';

export async function addLikeSheet({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (res.data.type) {
        if (cb) {
            cb();
        }
        Toast.success(res.data.msg, 1)
        return {
            type: GETLIKESHEET,
            list: res.data.data
        }
    } else {
        Toast.fail(res.data.msg, 1)
        return {
            type: ADDLIKESHEET
        }
    }

}

export const DISLIKESHEET = 'disLikeSheet';

export async function disLikeSheet({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb(res);
    }
    Toast.success(res.data.msg, 1)
    return {
        type: GETLIKESHEET,
        list: res.data.data

    }
}

export const GETCOLLECT = 'getCollect';

export async function getCollect({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb();
    }
    return {
        type: GETCOLLECT,
        list: res.data.data
    }
}

export const ADDCOLLECT = 'addCollect';

export async function addCollect({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (res.data.type) {
        if (cb) {
            cb();
        }
        Toast.success(res.data.msg, 1)
        return {
            type: GETCOLLECT,
            list: res.data.data
        }
    } else {
        Toast.fail(res.data.msg, 1)
        return {
            type: ADDCOLLECT
        }
    }
}

export const DISCOLLECT = 'disCollect';

export async function disCollect({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb();
    }
    Toast.success(res.data.msg, 1)
    return {
        type: GETCOLLECT,
        list: res.data.data
    }
}