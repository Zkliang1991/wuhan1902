import { axios } from "../../utils";

export const SETSIDEBAROPEN = 'setSidebarOpen';


export const setSidebarOpen = () => {
    return {
        type: SETSIDEBAROPEN
    }
}


export const SETUSERIMG = 'setUserImg';
export async function shangChuan({ url, params }, cb) {
    var res = await axios({
        url: url,
        method: params.type,
        contentType: params.contentType,
        processData: params.processData,
        data: params.data
    })
    if (cb) {
        cb(res)
    }
    return {
        type: SETUSERIMG,
        img: res.data.avatarUrl
    }
} 