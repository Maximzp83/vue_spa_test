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
  },
  getPostById: state => id => {
    let intId = +id;
    return state.posts.find(post => post.id === intId);
  },
  getPostsByAuthor: state => id => {
    let intId = +id;
    return state.posts.filter(post => post.userId === intId);
  },
  getMostViewedPosts: state => {
    // console.log('getMostViewedPosts')
    var posts = state.posts;
    var postsWithMaxViews = [];
    
    if (posts.length) {
      postsWithMaxViews.push(posts[0]);
      postsWithMaxViews.push(posts[1]);

          // console.log(postsWithMaxViews)
      
      for (let i = 0; i < posts.length; i++) {
        // console.log(posts[i].views)
        if (posts[i].views > postsWithMaxViews[0].views) {
          postsWithMaxViews[0] = posts[i];
        } 
      }
      for (let i = 0; i < posts.length; i++) {
        if (posts[i] != postsWithMaxViews[0] && posts[i].views > postsWithMaxViews[1].views) {
          postsWithMaxViews[1] = posts[i];
        } 
      }
    }
    
    // console.log(postsWithMaxViews)

    return postsWithMaxViews
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
