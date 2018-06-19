// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from './store/index'


Vue.config.productionTip = false

/* eslint-disable no-new */
const v_app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

window.v_app = v_app; //temp
