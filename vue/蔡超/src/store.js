import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { GET_TITLE, GET_SWIPE_AJAX, GET_SWIPE, GET_TABS_AJAX, GET_CONTEXT_AJAX, GET_DETAIL_SHOW, GET_DETAIL_AJAX, GET_USERS_SHOW, GET_USERS_ACTIVE, GET_MY_USERSID, GET_DISCUSS_ARR, GET_RELOAD, GET_DOWN_SHOW, GET_FLAG, GET_ZAN, GET_CAI, GET_CONLLECT_GET, GET_COLNUM, GET_DISNUM, GO_COLNUM, GO_DISNUM, GET_MY_HEAD_IMG, GET_EXCELL_AJAX, GET_EXSHOW, GET_SEARCH_SHOW, GET_SEARCH_LIST, GET_RANK_SHOW, GET_READ_RANK, GET_DIS_RANK, GET_COL_RANK, GET_MY_DIS_SHOW, GET_MY_DIS_LIST } from '@/utils/mutate_types';
import axios from '@/utils/ajax';
import { read } from 'fs';
const store = new Vuex.Store({
  state: {
    //头部haedr
    arr: [
      { name: 'home', title: '首页' },
      { name: 'itemize', title: '分类' },
      { name: 'collect', title: '收藏' },
      { name: 'my', title: '个人中心' }
    ],
    title: '',
    titleshow: true,


    //search 搜索
    search: {
      show: false,
      list: []
    },
    ranking: {
      show: false,
      readrank: [],
      colrank: [],
      disrank: []
    },
    //home swipe
    swipeId: '',
    swipeOptions: {},
    bookswipe: [],
    excell: [],
    exshow: true,

    //itemize 分类页 的tab标签 context内容
    itemize: {
      tabs: [],
      context: [],
    },
    //详情页
    detail: {
      show: false,
      item: {},
      flag: false,
      downshow: false,
      colnum: 0,
      disnum: 0

    },

    //登录页
    users: {
      usershow: false,
      active: 0,
      logclear: false,
      regclear: false
    },
    //reload刷新页面
    reload: {
      isAllShow: true
    },
    //个人中心
    my: {
      userid: '',
      headimg: '',
    },
    //评论
    discuss: {
      arr: [],
    },
    //收藏页的书
    collect: {
      books: [],
      btnshow: false
    },

    //我的评论
    mydis: {
      show: false,
      list: []
    }
  },
  actions: {
    //头部haedr
    titleAdd({ commit }, msg) {
      commit(GET_TITLE, msg)
    },
    //guide swipe
    swipeAdd({ commit }, data) {
      commit(GET_SWIPE, data)
    },

    //home swipe ajax请求
    homeAddAjax({ commit }, { url, params }) {
      axios.get(url, { params: params }).then(res => {
        commit(GET_SWIPE_AJAX, res.data.swipeArr);
        commit(GET_EXCELL_AJAX, res.data.exArr);

      })
    },
    //搜索
    addSearch({ commit }, data) {
      axios.get(data.url, { params: data.params }).then(res => {
        commit(GET_SEARCH_LIST, res.data.result)
        commit(GET_SEARCH_SHOW, true)
      })
    },
    //单独获取精品阅读
    addExcellAjax({ commit }, data) {
      commit(GET_EXSHOW, false);
      axios.get(data.url, { params: data.params }).then(res => {
        commit(GET_EXCELL_AJAX, res.data.exArr);
        commit(GET_EXSHOW, true);
      })
    },
    //获取排行
    addRanking({ commit }, data) {
      axios.get(data.url).then(res => {
        commit(GET_READ_RANK, res.data.readrank);
        commit(GET_COL_RANK, res.data.colrank);
        commit(GET_DIS_RANK, res.data.disrank);
        commit(GET_RANK_SHOW, true)
      })
    },
    //itemize tab
    addTabAjax({ commit }, { url }) {
      axios.get(url).then(res => {
        commit(GET_TABS_AJAX, res.data.result);

      })
    },

    //itemize context
    addContextAjax({ commit }, { url, params }) {
      axios.get(url, { params: params }).then(res => {
        commit(GET_CONTEXT_AJAX, res.data.result);
      })
    },

    //detail show
    addDetailShow({ commit }, data) {
      if (data.title) {
        axios.get(data.url, { params: { title: data.title } }).then(res => {
          commit(GET_DETAIL_AJAX, res.data.result);
          commit(GET_COLNUM, res.data.colnum);
          commit(GET_DISNUM, res.data.disnum);
          commit(GET_FLAG, true);
          commit(GET_DETAIL_SHOW, data.show);
        })
      } else {
        commit(GET_DETAIL_SHOW, data.show);
      }
    },
    //register 注册
    addRegAjax({ commit }, data) {
      axios.post(data.url, data.reg).then(res => {
        if (res.data.type == 1) {
          commit(GET_USERS_ACTIVE, 0);
        }
      })
    },
    //login 登录
    addLogAjax({ commit }, data) {
      commit(GET_RELOAD, false);
      axios.post(data.url, data.log).then(res => {
        if (res.data.type == 1) {
          commit(GET_USERS_SHOW, false);
          commit(GET_RELOAD, true);
          sessionStorage.userinfo = JSON.stringify({ token: res.data.token });
        } else {
          sessionStorage.removeItem('userinfo');
        }

      })
    },
    //my 登录状态获取
    addMyUserId({ commit }, data) {
      axios.get(data.url).then(res => {
        commit(GET_MY_USERSID, res.data.userid)
        // commit(GET_MY_HEAD_IMG, res.data.headimg.replace(/public/, 'http://localhost:1902/'))
        commit(GET_MY_HEAD_IMG, res.data.headimg.replace(/public/, 'http://47.93.187.155:1902/'))
      })
    },
    //上传头像
    addHeadImg({ commit }, params) {
      commit(GET_RELOAD, false);
      axios({
        url: params.url,
        method: params.type,
        contentType: params.contentType,
        processData: params.processData,
        data: params.data
      }).then((res) => {
        commit(GET_RELOAD, true);
        // commit(GET_MY_HEAD_IMG, res.data.avatarUrl.replace(/public/, 'http://localhost:1902/'))
        commit(GET_MY_HEAD_IMG, res.data.avatarUrl.replace(/public/, 'http://47.93.187.155:1902/'))
      })
    },
    //discuss 评论输入数据库
    addDiscussSet({ commit }, data) {
      axios.get(data.url, { params: data.dis }).then(res => {
        commit(GET_DISCUSS_ARR, res.data.result);
        commit(GO_DISNUM);
      })
    },
    //discuss 评论获取
    addDiscussAJAX({ commit }, data) {
      axios.get(data.url, { params: { title: data.title } }).then(res => {
        if (res.data.code == 200) {
          commit(GET_DISCUSS_ARR, res.data.result);
          commit(GET_DOWN_SHOW, true);
        } else {
          commit(GET_USERS_SHOW, true);
        }
      })
    },
    //赞    踩
    addZanCai({ commit }, data) {
      axios.get(data.url, { params: data.dis }).then((res) => {
        commit(GET_DISCUSS_ARR, res.data.result);
      })
    },
    //收藏一本书
    addCollectGet({ commit }, data) {
      axios.post(data.url, data.book).then((res) => {
        if (res.data.code == 200 && res.data.type == 1) {
          commit(GO_COLNUM);
        }
        if (res.data.code != 200) {
          commit(GET_USERS_SHOW, true);
        }
      })
    },
    //获取收藏的书
    addCollectSet({ commit }, data) {
      axios.get(data.url).then((res) => {
        if (res.data.code == 200) {
          commit(GET_CONLLECT_GET, res.data.result);
        } else {
          commit(GET_USERS_SHOW, true);
        }
      })
    },
    //删除收藏的书
    addCollectDel({ commit }, data) {
      commit(GET_RELOAD, false);
      axios.get(data.url, { params: { title: data.title } }).then((res) => {
        commit(GET_CONLLECT_GET, res.data.result);
        commit(GET_RELOAD, true);
      })
    },
    //我的评论获取
    addMyDisAjax({ commit }, data) {
      axios.get(data.url).then((res) => {
        if (res.data.code == 200) {
          commit(GET_MY_DIS_LIST, res.data.result);
          commit(GET_MY_DIS_SHOW, true);
        } else {
          commit(GET_USERS_SHOW, true);
        }
      })
    }
  },
  mutations: {
    //头部haedr
    [GET_TITLE](state, msg) {
      state.arr.forEach(item => {
        if (item.name == msg) {
          state.title = item.title;
        }
      })
    },
    //头部搜索框
    getSearch(state, titleshow) {
      state.titleshow = titleshow;
    },
    //搜索内容
    [GET_SEARCH_SHOW](state, show) {
      state.search = { ...state.search, show };
    },
    //搜索列表
    [GET_SEARCH_LIST](state, list) {
      state.search = { ...state.search, list };
    },
    //排行显隐
    [GET_RANK_SHOW](state, show) {
      state.ranking = { ...state.ranking, show };
    },
    [GET_READ_RANK](state, readrank) {
      state.ranking = { ...state.ranking, readrank };
    },
    [GET_COL_RANK](state, colrank) {
      state.ranking = { ...state.ranking, colrank };
    },
    [GET_DIS_RANK](state, disrank) {
      state.ranking = { ...state.ranking, disrank };
    },
    //guide swipe
    [GET_SWIPE](state, data) {
      state.swipeId = data.swipeId;
      state.swipeOptions = data.swipeOptions;
    },
    //home swipe ajax请求
    [GET_SWIPE_AJAX](state, data) {
      state.bookswipe = data;
    },
    [GET_EXCELL_AJAX](state, data) {
      state.excell = data;
    },
    [GET_EXSHOW](state, exshow) {
      state.exshow = exshow;
    },
    //itemize tab
    [GET_TABS_AJAX](state, tabs) {
      state.itemize = { ...state.itemize, tabs }
      //itemize context
    },
    [GET_CONTEXT_AJAX](state, context) {
      state.itemize = { ...state.itemize, context }

    },
    //详情页显隐
    [GET_DETAIL_SHOW](state, show) {
      state.detail = { ...state.detail, show }
    },
    //详情页ajax请求
    [GET_DETAIL_AJAX](state, item) {
      state.detail = { ...state.detail, item };
    },
    //详情页收藏数
    [GET_COLNUM](state, colnum) {
      state.detail = { ...state.detail, colnum };
    },
    //详情页评论数
    [GET_DISNUM](state, disnum) {
      state.detail = { ...state.detail, disnum };
    },
    //收藏时+1
    [GO_COLNUM](state) {
      state.detail.colnum++;
    },
    //评论时+1
    [GO_DISNUM](state) {
      state.detail.disnum++;
    },
    //详情页评论显隐
    [GET_DOWN_SHOW](state, downshow) {
      state.detail = { ...state.detail, downshow }
    },
    //列表页点击切换
    [GET_FLAG](state, flag) {
      state.detail = { ...state.detail, flag };
    },
    [GET_USERS_SHOW](state, usershow) {
      state.users = { ...state.users, usershow };
    },

    //更改user页面active
    [GET_USERS_ACTIVE](state, active) {
      state.users = { ...state.users, active };
    },

    //个人中心 登录状态获取
    [GET_MY_USERSID](state, userid) {
      state.my = { ...state.my, userid };
    },
    [GET_MY_HEAD_IMG](state, headimg) {
      state.my = { ...state.my, headimg };
    },
    [GET_RELOAD](state, isAllShow) {
      state.reload = { ...state.reload, isAllShow };
    },

    //评论
    [GET_DISCUSS_ARR](state, arr) {
      state.discuss = { ...state.discuss, arr };
    },
    //赞
    [GET_ZAN](state, zan) {
      state.discuss = { ...state.discuss, zan }
    },
    //踩
    [GET_CAI](state, cai) {
      state.discuss = { ...state.discuss, cai }
    },
    [GET_CONLLECT_GET](state, books) {
      state.collect = { ...state.collect, books }
    },
    //控制收藏删除的显隐
    getBtnShow(state, btnshow) {
      state.collect = { ...state.collect, btnshow };
    },
    [GET_MY_DIS_SHOW](state, show) {
      state.mydis = { ...state.mydis, show };
    },
    [GET_MY_DIS_LIST](state, list) {
      state.mydis = { ...state.mydis, list };
    }
  }
})

export default store;
