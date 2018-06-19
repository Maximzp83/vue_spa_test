import dataBase from '../../api/dataBase'

// initial state
const state = {
  posts: [],
  count: 12
}

// getters
const getters = {
  getStatePosts: state => state.posts
}

// actions
const actions = {
  getPosts (context, {amount}) {
    setTimeout(() => {
      // console.log('number: ', amount)
      context.commit('increment', amount)
    }, 1000)
    // dataBase.getPosts;
    // context.commit('setPosts');
  },

}

// mutations
const mutations = {
  increment (state, number) {
    state.count+=number
  },
  setPosts (state, posts) {
    state.posts = posts
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
