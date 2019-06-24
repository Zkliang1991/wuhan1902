import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/utils/ajax"
import router from "./router"
import { Toast } from "vant";
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        // active: 1,
        foo: 0,
        my: 0,
        flag: false,
        changeMuisc: '',
        active: 0,
        musicxq: {
            imgUrl: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=url&id=1367368790',
            imgpic: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=pic&id=1367368790',
            imgyou: '杨胖雨',
            imgtitle: "情深深雨濛濛",
        },
        login: {},
        user: {},
        zhuceLogo: require("@/assets/img/zhucelogo.jpg"),
        // myphoto: require("@/assets/img/photo.png"),
        juziImg: require("@/assets/img/juzi.jpg"),
        loginimg: require("@/assets/img/loginimg.gif"),
        bgcImg: require("@/assets/img/bgc.jpg"),
        musiclogo: require("@/assets/img/musiclogo.jpg"),
        data: {
            pbg:[
                require("@/assets/img/pbg1.jpg"),
                require("@/assets/img/pbg2.jpg"),
                require("@/assets/img/pbg3.jpg"),
            ],
            scimg:[
                require("@/assets/img/sc1.jpg"),
                require("@/assets/img/sc2.jpg"),
                require("@/assets/img/sc3.jpg"),
            ],
            mymusics: [],
            musics: [],
            stImgs: [
                require("@/assets/img/slbt1.jpg"),
                require("@/assets/img/slbt2.jpg"),
                require("@/assets/img/slbt3.jpg"),
                require("@/assets/img/slbt4.jpg"),
                require("@/assets/img/slbt5.png"),
            ],
            phbimg: [
                require("@/assets/img/phb1.jpg"),
                require("@/assets/img/phb2.jpg"),
                require("@/assets/img/phb3.jpg"),
                require("@/assets/img/phb4.jpg"),
                require("@/assets/img/phb5.jpg"),
                require("@/assets/img/phb6.jpg"),
            ],
            phbtitle: [
                '云音乐热歌榜',
                '云音乐新歌榜',
                '网易原创歌曲榜',
                '中国新说唱TOP榜',
                '抖音排行榜',
                'YOLO云音乐说唱榜',
            ],
            gdimg: [
                require("@/assets/img/gd1.jpg"),
                require("@/assets/img/gd2.jpg"),
                require("@/assets/img/gd3.jpg"),
                require("@/assets/img/gd4.jpg"),
                require("@/assets/img/gd5.jpg"),
                require("@/assets/img/gd6.jpg"),
                require("@/assets/img/gd7.jpg"),
                require("@/assets/img/gd8.jpg"),
                require("@/assets/img/gd9.jpg"),
                require("@/assets/img/gd10.jpg"),
                require("@/assets/img/gd11.jpg"),
                require("@/assets/img/gd12.jpg"),
                require("@/assets/img/gd13.jpg"),
                require("@/assets/img/gd14.jpg"),
                require("@/assets/img/gd15.jpg"),
                require("@/assets/img/gd16.jpg"),
            ],
            gdtitle: [
                '张国荣 Lesile',
                '陈奕迅 Eason',
                '周二珂 Chloe',
                '薛之谦 JokerXue',
                '百听不厌的老歌',
                '舒缓减压催眠曲',
                '愿你知足且上进',
                '华语民谣丨治愈孤独',
                '听rapper说情话',
                '单曲循环耳朵喜欢你',
                '世界最好听的钢琴曲',
                '精选丨网络热歌',
                'Cover的那些循环歌曲',
                '码农专享',
                '后驱车丨Music专属',
                '温柔丨沉溺于男友音',
            ],
            nlImg: [
                require("@/assets/img/nl1.jpg"),
                require("@/assets/img/nl2.jpg"),
                require("@/assets/img/nl3.jpg"),
                require("@/assets/img/nl4.jpg"),
                require("@/assets/img/nl5.jpg"),
                require("@/assets/img/nl6.jpg"),
                require("@/assets/img/nl7.jpg"),
            ]
        }
    },
    actions: {
        logins({ commit }) {
            commit('logins')
        },
        userzhuce({ commit }) {
            commit('userzhuce')
        },
        // csmusic({ commit }, i) {
        //     commit('csmusic', i)
        // },
        getMyMusic({ commit }) {
            commit('getMyMusic')
        }
    },
    mutations: {
        logins(state) {
            axios.post("/vue/login", state.login).then(res => {
                console.log(res);
                if (res.data.type == 1) {
                    sessionStorage.Usertoken = JSON.stringify({ token: res.data.token });
                    sessionStorage.username = res.data.name
                    Toast.success({
                        duration: 500,
                        message: "登陆成功"
                    });
                    setTimeout(() => {
                        router.push({ name: "head" });
                    }, 500);
                } else {
                    sessionStorage.removeItem("Usertoken");
                    Toast.success({
                        duration: 500,
                        message: "登陆失败"
                    });
                }
            });
        },
        userzhuce(state) {
            axios.post("/vue/zhuce", state.user).then(res => {
                console.log(res);
                if (res.data.type == 1) {
                    sessionStorage.Usertoken = JSON.stringify({ token: res.data.token });
                    sessionStorage.username = res.data.name
                    Toast.success({
                        duration: 900,
                        message: "注册成功"
                    });
                    setTimeout(() => {
                        router.push({ name: "head" });
                    }, 700);
                }
            });
        },
        changeMuisc(state, val) {
            state.changeMuisc = val
        },
        setMusic(state, musics) {
            state.data = { ...state.data, musics }
        },
        mymusic(state, mymusics) {
            state.data = { ...state.data, mymusics }
        },
        playMusic(state, i) {
            state.musicxq.imgUrl = state.data.musics[i].url
            state.musicxq.imgpic = state.data.musics[i].pic
            state.musicxq.imgyou = state.data.musics[i].author
            state.musicxq.imgtitle = state.data.musics[i].title
            state.foo = ++state.foo
            console.log(state.musicxq.imgUrl);
        },
        playscMusic(state, i) {
            state.musicxq.imgUrl = state.data.mymusics[i].musics.url
            state.musicxq.imgpic = state.data.mymusics[i].musics.pic
            state.musicxq.imgyou = state.data.mymusics[i].musics.author
            state.musicxq.imgtitle = state.data.mymusics[i].musics.title
            state.my = ++state.my
        },
        // play(state, o) {
        //     state.flag = o
        //     console.log(state.flag);
        // },
        outlogin(state) {
            history.go(0)
            state.login = '';
            sessionStorage.clear()
        }
    },
    getters: {
    }
})

export default store;