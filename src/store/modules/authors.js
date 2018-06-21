import authorsDataBase from '../../api/authorsDataBase'

// initial state
const state = {
  authors: [],
  authUser: {}
}

// getters
const getters = {
  authorsCount: state => {
    return state.authors.length;
  },
  getAuthorById: state => id => {
    let intId = +id;
    return state.authors.find(author => author.id === intId);
  },

}

// actions
const actions = {
  // getPosts (context, {amount}) {
  getAuthors ({ commit}) {
    // console.log('number: ', amount)
    // context.commit('increment', amount)
    
    // let posts = dataBase.getPosts();
    // console.log('posts: ', posts)
    authorsDataBase.getAuthors(authors => {
      commit('setAuthors', authors)
    })
    // context.commit('setPosts', posts)
  },


}

// mutations
const mutations = {
  
  setAuthors (state, authors) {
    state.authors = authors
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
