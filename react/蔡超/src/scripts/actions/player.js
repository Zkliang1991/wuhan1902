


export const SETTIME = 'setTime';

export const setTime = (time) => {
    return {
        type: SETTIME,
        time
    }
}

export const SETREADYTIME = 'setReadyTime';
export const setReadyTime = (time) => {
    return {
        type: SETREADYTIME,
        time
    }
}
export const SETLOADTEXT = 'setLoadText';
export const setLoadText = (text) => {
    return {
        type: SETLOADTEXT,
        text
    }
}



export const SETPLAY = 'setPlay';

export const setPlay = (play) => {
    return {
        type: SETPLAY,
        play
    }
}

export const SETPLAYID = 'setPlayId';

export const setPlayId = (id) => {
    return {
        type: SETPLAYID,
        id
    }
}

export const SETPLAYED = 'setPlayed';

export const setPlayed = (time) => {
    return {
        type: SETPLAYED,
        time
    }
}

export const SETPLAYNUM = 'setPlayNum';

export const setPlayNum = (num) => {
    return {
        type: SETPLAYNUM,
        num
    }
}
export const SETPLAYNUMADD = 'setPlayNumAdd';

export const setPlayNumAdd = () => {
    return {
        type: SETPLAYNUMADD,
    }
}
export const SETPLAYNUMCUT = 'setPlayNumCut';

export const setPlayNumCut = () => {
    return {
        type: SETPLAYNUMCUT,
    }
}