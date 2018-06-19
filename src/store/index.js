import Vuex from 'vuex'
import Vue from 'vue'
import { mapState } from 'vuex';

import posts from './modules/posts'

// import cart from './cart'
// import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts
  }
})
