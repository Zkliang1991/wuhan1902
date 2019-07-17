import { axios } from '../../utils';

export const SETMUSICOPEN = 'setMusicOpen';

export const setMusicOpen = () => {
    return {
        type: SETMUSICOPEN
    }
}

export const SETLYRIC = 'setLyric';
export const setLyric = (bul) => {
    return {
        type: SETLYRIC,
        bul
    }
}

export const SETLYRICTOP = 'setLyricTop';
export const setLyricTop = (str) => {
    return {
        type: SETLYRICTOP,
        str
    }
}
export const SETLYRICLIST = 'setLyricList';
export async function setLyricList({ url, params }, cb) {
    var res = await axios.get(url, { params });
    var arr = res.data.split('[')
    var br = [];
    var timelist = [];
    arr.map((txt, i) => {
        var idx = txt.indexOf(':');
        var lft = txt.substring(0, idx);
        var rgt = txt.substring(idx + 1, idx + 3);
        if (lft * 1 + rgt * 1 && lft * 1 + rgt * 1 != 0) {
            var time = lft * 60 + rgt * 1;
            var tdx = txt.indexOf(']');
            var text = txt.substring(tdx + 1);
            br.push({ time, text });
            timelist.push({ time, text: [] });
        }
    })
    timelist.map((item, i) => {
        br.map((text, j) => {
            if (item.time == text.time) {
                item.text.unshift(text.text)
            }
        })
    })
    for (var i = 0; i < timelist.length; i++) {
        for (var j = i + 1; j < timelist.length; j++) {
            if (timelist[i].time == timelist[j].time) {
                timelist.splice(j, 1);
            }
        }
    }
    var temp = null;
    for (var i = 0; i < timelist.length; i++) {
        for (var j = i + 1; j < timelist.length; j++) {
            if (timelist[i].time > timelist[j].time) {
                temp = timelist[j];
                timelist[j] = timelist[i];
                timelist[i] = temp;
            }
        }
    }
    if (cb) {
        cb(res);
    }
    return {
        type: SETLYRICLIST,
        list: timelist
    }
}

export const SETLYRICNUM = 'setLyricNum';

export const setLyricNum = (num) => {
    return {
        type: SETLYRICNUM,
        num
    }
}