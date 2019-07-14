import Vue from 'vue'
import Router from 'vue-router'

//0.模块化 编程 vue.use(Router) 全局声明 使用 router模块
Vue.use(Router)

//1.创建路由组件
import Home from './views/Home.vue'
import VueRouter from 'vue-router';

//2.配置routes
const routes = [{
        path: "/",
        redirect: { name: 'guide' }
    },
    {
        path: "/guide",
        name: 'guide',
        component: () =>
            import ("@/views/guide.vue")
    },
    {
        path: "/index",
        name: 'index',
        component: () =>
            import ("@/views/index.vue"),
        children: [{
                path: "fenlei",
                name: 'fenlei',
                component: () =>
                    import ("@/views/fenlei.vue")
            },
            {
                path: "",
                redirect: { name: 'home' },
            },
            {
                path: "my",
                name: 'my',
                component: () =>
                    import ("@/views/my.vue")
            },
            {
                path: "shpping",
                name: 'shpping',
                component: () =>
                    import ("@/views/shpping.vue")
            },
            {
                path: "home",
                name: "home",
                component: Home
            },
        ]
    },
    {
        path: "/search",
        name: "search",
        component: () =>
            import ("@/views/search.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("@/views/login.vue")
    },
    {
        path: "/good/:footId",
        name: 'good',
        component: () =>
            import ("@/views/good.vue")

    },
    {
        path: "*",
        redirect: { name: 'home' }
    }
]

//3.创建路由对象
const router = new VueRouter({
    routes,
    mode: "hash",
    base: "/"
})

//4.挂载 跟实例 
export default router;


/* export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about"  './views/About.vue')
        }
    ]
}) */