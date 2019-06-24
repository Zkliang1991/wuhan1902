import Vue from 'vue'
import components from '../.nuxt/components/nuxt';
// import components from '../.nuxt/components/nuxt-link.server';

import Head from '~/components/head'
Vue.component("Head", Head)


import Foot from '~/components/foot'
Vue.component("Foot", Foot);


import List from '~/components/list'
Vue.component("List", List);


import Lint from '~/components/lint.vue'
Vue.component("Lint", Lint)