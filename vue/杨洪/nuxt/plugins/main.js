

//封装全局组件  

import { NavBar } from 'vant';

Vue.use(NavBar);
import { Toast } from 'vant'
Vue.use(Toast);
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

import { Field } from 'vant';

Vue.use(Field);

import { Swipe, SwipeItem } from 'vant';  //轮播

Vue.use(Swipe).use(SwipeItem);

import Vue from "vue"

import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);

// import Swipe from '../components/swipe.vue';

// Vue.component("swipe",Swipe);

import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);//图片懒加载

import { Search } from 'vant';

Vue.use(Search);

import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

import  Head from '../components/head.vue'
Vue.component("Head",Head)


import list from "../components/list.vue"
Vue.component("list" , list)


import vuex from "vuex"

Vue.use(vuex)

