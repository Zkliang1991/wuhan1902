import { axios } from '@/utils';

export const GETTABS = 'getTabs';

export async function getTabs({ url }, cb) {
    var res = await axios.get(url);
    res.data.result.map((tab, i) => {
        tab.title = tab.name;
    })
    if (cb) {
        cb(res);
    }
    return {
        type: GETTABS,
        tabs: res.data.result
    }
}

export const TABSLIST = 'tabsList';

export async function tabsList({ url, params }, cb) {
    var res = await axios.get(url, { params })
    if (cb) {
        cb(res);
    }
    return {
        type: TABSLIST,
        list: res.data.data
    }
}

export const SETTABLIST = 'setTabList';

export const setTabList = () => {
    return {
        type: SETTABLIST,
        arr: []
    }
}