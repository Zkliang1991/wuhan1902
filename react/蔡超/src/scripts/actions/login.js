import { axios } from '../../utils';

import { Toast } from 'antd-mobile';



export const GETOPENONE = 'getOpenOne';

export async function getOpenOne({ url, params }, cb) {
    var res = await axios.post(url, params);
    if (res.data.type) {
        if (cb) {
            cb(res);
        }
        Toast.success(res.data.msg, 1);
        return {
            type: GETOPENONE
        }
    } else {
        Toast.fail(res.data.msg, 1);
        return {
            type: GETOPENONE
        }
    }
}



export const SETLOGINOPEN = 'setLoginOpen';


export const setLoginOpen = () => {
    return {
        type: SETLOGINOPEN
    }
}


export const SETFLAG = 'serFlag';

export const setFlag = (flag, cb) => {
    if (!flag) {
        cb();
    }
    return {
        type: SETFLAG,
        flag: flag
    }


}

export const SETCOUNT = 'setCount';

export const setCount = (count) => {
    return {
        type: SETCOUNT,
        count
    }
}

export const SETDISABLED = 'setDisabled';

export const setDisabled = (disabled) => {
    return {
        type: SETDISABLED,
        disabled
    }
}

export const SETMOBILE = 'setMobile';
export const setMobile = (mobile) => {
    return {
        type: SETMOBILE,
        mobile
    }
}

export const SETCODE = 'setCode';
export const setCode = (code) => {
    return {
        type: SETCODE,
        code
    }
}

export const GETCODE = 'getCode';

export async function getCode({ url, params }, cb) {
    var res = await axios.post(url, params);
    if (!!res.data.type) {
        if (cb) {
            cb();
        }
        Toast.success(res.data.msg, 1)
        return {
            type: GETCODE
        }
    } else {
        Toast.fail(res.data.msg, 1)
        return {
            type: GETCODE
        }
    }

}
export const SETTOKEN = 'setToken';

export const setToken = (token) => {
    return {
        type: SETTOKEN,
        token
    }
}


export const GETLOGIN = 'getLogin';

export async function getLogin({ url, params }, cb) {
    var res = await axios.post(url, params);
    if (!!res.data.type) {
        if (cb) {
            cb(res);
        }
        Toast.success(res.data.msg, 1)
        return {
            type: SETTOKEN,
            token: res.data.token
        }
    } else {
        Toast.fail(res.data.msg, 1)
        return {
            type: GETLOGIN
        }
    }
}

export const SETUSERNAME = 'setUserName';

export const setUserName = (name) => {
    return {
        type: SETUSERNAME,
        username: name
    }
}
export const SETUSERIMG = 'setUserImg';

export const setUserImg = (img) => {
    return {
        type: SETUSERIMG,
        img
    }
}