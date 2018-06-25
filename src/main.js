// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import middlewares from './router/middlewares'

import store from './store/index'


Vue.config.productionTip = false

/* eslint-disable no-new */
const v_app = new Vue({
  el: '#app',
  router,
  middlewares,
  store,
  components: { App },
  template: '<App/>'
})

window.v_app = v_app; //temp



// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     next()
//     let thisNext = next;
//     // console.log(store.getters['auth/isAuthenticated'])
//     if (store.getters['auth/isAuthenticated']) {
//       console.log('next', next)

//       thisNext()

//       // next({
//       //   path: '/login',
//       //  query: { redirect: to.fullPath }
//       // })
//     } else {
//       console.log('next', next)
//       next()
//     }
//   } else {
//     console.log('next2')
//     next() // всегда так или иначе нужно вызвать next()!
//   }
// })