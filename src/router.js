import Vue from 'vue'
import Router from 'vue-router'

// modules
import auth from './store/modules/auth'
import store from './store/store'

// Authentication
import Login from './views/authentication/Login.vue'

import CheckIn from './views/CheckIn.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      beforeEnter: (to, from, next) => {
        if (auth.getters.isAuthenticated()) {
          next({name: 'dashboard'})
        } else {
          next({name: 'login'})
        }
      }
    },
    // MAIN SECTIONS
    // AUTHENTICATION
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: (to, from, next) => {
        store.dispatch('auth/logout')
        next({name: 'root'})
      }
    },
    {
      path: '/callback',
      name: 'callback'
    },
    {
      path: '/check-in',
      name: 'checkin',
      component: CheckIn
    }
  ]
})

let whitelisted_routes = [
  'root',
  'login',
  'checkin',
  'callback'
]

// verify data before route
router.beforeEach((to, from, next) => {
  if (whitelisted_routes.includes(to.name)) {
    next()
  } else {
    if (auth.getters.isAuthenticated()) {
      next()
    } else {
      next({name: 'login'})
    }
  }
})

export default router

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }
