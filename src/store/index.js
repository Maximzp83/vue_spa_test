import Vuex from 'vuex'
import Vue from 'vue'
// import { mapState } from 'vuex';

import auth from './modules/auth'
import posts from './modules/posts'
import authors from './modules/authors'
import global from './modules/global'


// import cart from './cart'
// import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    auth,
    posts,
    authors,
    global
  }
})
