
import Vue from "vue"
import Vueresource from "vue-resource";
 Vue.use(Vueresource)

 import ajax from "./axiso";
 Vue.prototype.$axios=ajax;