import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d96446a = () => interopDefault(import('../pages/Pictures/index.vue' /* webpackChunkName: "pages/Pictures/index" */))
const _7d7e2970 = () => interopDefault(import('../pages/Users/index.vue' /* webpackChunkName: "pages/Users/index" */))
const _88f7c994 = () => interopDefault(import('../pages/Pictures/_id/index.vue' /* webpackChunkName: "pages/Pictures/_id/index" */))
const _e8b9bb9a = () => interopDefault(import('../pages/Users/_id/index.vue' /* webpackChunkName: "pages/Users/_id/index" */))
const _25e0a26f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Pictures",
    component: _6d96446a,
    name: "Pictures"
  }, {
    path: "/Users",
    component: _7d7e2970,
    name: "Users"
  }, {
    path: "/Pictures/:id",
    component: _88f7c994,
    name: "Pictures-id"
  }, {
    path: "/Users/:id",
    component: _e8b9bb9a,
    name: "Users-id"
  }, {
    path: "/",
    component: _25e0a26f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
