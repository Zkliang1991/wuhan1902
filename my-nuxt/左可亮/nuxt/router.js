import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0c693318 = () => interopDefault(import('..\\pages\\app.vue' /* webpackChunkName: "pages_app" */))
const _4810838e = () => interopDefault(import('..\\pages\\app\\index.vue' /* webpackChunkName: "pages_app_index" */))
const _8fe8b266 = () => interopDefault(import('..\\pages\\app\\_title.vue' /* webpackChunkName: "pages_app__title" */))
const _c6c093b2 = () => interopDefault(import('..\\pages\\parent.vue' /* webpackChunkName: "pages_parent" */))
const _a3f0970a = () => interopDefault(import('..\\pages\\parent\\index.vue' /* webpackChunkName: "pages_parent_index" */))
const _3258a04f = () => interopDefault(import('..\\pages\\parent\\one.vue' /* webpackChunkName: "pages_parent_one" */))
const _4ac05135 = () => interopDefault(import('..\\pages\\parent\\two.vue' /* webpackChunkName: "pages_parent_two" */))
const _4a775c2f = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */))
const _69f8b1e5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/app",
      component: _0c693318,
      children: [{
        path: "",
        component: _4810838e,
        name: "app"
      }, {
        path: ":title",
        component: _8fe8b266,
        name: "app-title"
      }]
    }, {
      path: "/parent",
      component: _c6c093b2,
      children: [{
        path: "",
        component: _a3f0970a,
        name: "parent"
      }, {
        path: "one",
        component: _3258a04f,
        name: "parent-one"
      }, {
        path: "two",
        component: _4ac05135,
        name: "parent-two"
      }]
    }, {
      path: "/users/:id?",
      component: _4a775c2f,
      name: "users-id"
    }, {
      path: "/",
      component: _69f8b1e5,
      name: "index"
    }],

    fallback: false
  })
}
