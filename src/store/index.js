import Vuex from 'vuex'
import Vue from 'vue'
// import { mapState } from 'vuex';

import posts from './modules/posts'
import authors from './modules/authors'


// import cart from './cart'
// import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    authors,
  }
})
