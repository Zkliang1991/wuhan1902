

import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    redirect: { name: 'guide' }

  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import("@/views/guide.vue")

  },
  {
    path: '/login',
    name:'login',
    component: () => import('@/views/login.vue'),

  },
  {
    path: '/register',
    name:'register',
    component: () => import('@/views/register.vue'),

  },
  {
    path: '/index',
    name: 'index',
    component: () => import('./views/index.vue'),
    children: [
      { path: '', redirect: { name: 'home' } },
      {
        path: 'home',
        name: 'home',
        component: () => import('./views/Home.vue'),
      },
      {
        path: 'buyCar',
        name: 'buyCar',
        component: () => import('./views/buyCar.vue'),
      },

      {
        path: 'my',
        name: 'my',
        component: () => import('./views/my.vue'),
      },
      {
        path: 'hot',
        name: 'hot',
        component: () => import('./views/hot.vue'),
      },
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('./views/search.vue'),
  },
  {
    path: '/good',
    name: 'good',
    component: () => import('./views/good.vue'),
  },
  {
    path: '/myList',
    name: 'myList',
    component: () => import('./views/myList.vue'),
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('./views/payment.vue'),
  },
  {
    path: '/allList',
    name: 'allList',
    component: () => import('./views/allList.vue'),
    children:[
      {
        path: 'alls',
        name: 'alls',
        component: () => import('@/components/all.vue'),
      },
      {
        path: 'Noplay',
        name: 'Noplay',
        component: () => import('@/components/Noplay.vue'),
      },
      {
        path: 'Toshipped',
        name: 'Toshipped',
        component: () => import('@/components/Toshipped.vue'),
      },
      {
        path: 'Toreceived',
        name: 'Toreceived',
        component: () => import('@/components/Toreceived.vue'),
      },
      {
        path: 'evaluate',
        name: 'evaluate',
        component: () => import('@/components/evaluate.vue'),
      },
    ]
  },
  {
    path: '/callList',
    name: 'callList',
    component: () => import('./views/callList.vue'),
  },
  {
    path: '*',
    redirect: { name: 'guide' }

  },
]

const router = new VueRouter({
  routes,
  mode: "hash",
  base: '/'
})
export default router

