import Vue from 'vue'
import VueResource from  "vue-resource"


Vue.use(VueResource)  //this.$http.get()


import ajax from "./axios"


Vue.prototype.$axios = ajax;