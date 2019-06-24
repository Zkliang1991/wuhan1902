import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
    {
        path: "/",
        redirect: { name: 'guide' }
    },
    {
        path: "/head",
        name: 'head',
        meta: { keepAlive: true },
        component: () => import("@/components/head.vue"),
    },
    {
        path: "/guide",
        name: 'guide',
        component: () => import("@/views/guide.vue")
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("@/views/login.vue")
    },
    {
        path: "/zhuce",
        name: 'zhuce',
        component: () => import("@/views/zhuce.vue")
    },
    {
        path: "/musiclist",
        name: 'musiclist',
        component: () => import("@/views/musiclist.vue")
    },
    {
        path: "*",
        redirect: { name: 'guide' }
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash',
    base: '/'
})

export default router;
