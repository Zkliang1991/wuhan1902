
import { axios } from '@/utils'

export const SETSEARCHOPEN = 'setSearchOpen';


export const setSearchOpen = () => {
    return {
        type: SETSEARCHOPEN
    }
}

export const GETSEARCHLIST = 'getSearchList';

export async function getSearchList({ url, params }, cb) {
    var res = await axios.get(url, { params });
    if (cb) {
        cb()
    }
    return {
        type: GETSEARCHLIST,
        list: res.data.data
    }
}

export const SETPAGENUM = 'setPageNum';

export const setPageNum = (num) => {
    return {
        type: SETPAGENUM,
        num
    }
}
export const SETSEARCHLIST = 'setSearchList';

export const setSearchList = () => {
    return {
        type: SETSEARCHLIST
    }
}

export const SETSEARCHVALUE = 'setSearchValue';

export const setSearchValue = (value) => {
    return {
        type: SETSEARCHVALUE,
        value
    }
}