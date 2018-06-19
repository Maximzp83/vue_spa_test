import dataBase from '../../api/dataBase'

// initial state
const state = {
  posts: [],
  count: 0
}

// getters
const getters = {
  postsCount: state => {
    return state.posts.length;
  }
}

// actions
const actions = {
  // getPosts (context, {amount}) {
  getPosts ({ commit}) {
    // console.log('number: ', amount)
    // context.commit('increment', amount)
    
    // let posts = dataBase.getPosts();
    // console.log('posts: ', posts)
    dataBase.getPosts(posts => {
      commit('setPosts', posts)
    })
    // context.commit('setPosts', posts)
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
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
