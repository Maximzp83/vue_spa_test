import dataBase from '../../api/dataBase'
import router from '../../router/index'

// initial state
const state = {
  posts: [],
  count: 0,
  postAddStatus: 'ready',
  
}

// getters
const getters = { 
  postsCount: state => {
    return state.posts.length;
  },
  getPostById: state => id => {
    let intId = +id;
    // console.log('getter: ', state.posts)
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
  },

  postAddStatus: state => {
    // console.log(state.authUser)
    return state.postAddStatus
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
  addPost ({commit, dispatch}, post) {
    const newPost = post.post;
    // console.log(post.post)
    return new Promise((resolve, reject) => { 
      commit('NEW_POST_REQUEST')

      dataBase.addPost(newPost, () => resolve())
     
    }).then(() => { 
        dataBase.getPosts(posts => {
          // console.log('dfg')
          commit('setPosts', posts)
          // commit('NEW_POST_SUCCESS')

          // setTimeout(() => {
            commit('POST_STATUS_CLEAR')
            this.dispatch('globalWarning', {
              message: 'Post successfuly added',
              status: 'success' 
            }) 
            router.push('/posts')          
          // }, 1500)
        })

        // resolve()
      })
  },

  editPost ({commit, dispatch}, post) {
    const newPost = post.post;
    return new Promise((resolve, reject) => { 
      commit('NEW_POST_REQUEST')

      dataBase.savePost(newPost, () => resolve())
     
    }).then(() => {
      dataBase.getPosts(posts => {
        // console.log('dfg')
        commit('setPosts', posts)
        commit('NEW_POST_SUCCESS')

        setTimeout(() => {
          // console.log('postAddStatus: ', state.postAddStatus)
          commit('POST_STATUS_CLEAR')
        }, 1500)
      })
    })
  }

}

// mutations
const mutations = {
  increment (state, number) {
    state.count+=number
  },
  setPosts (state, posts) {
    state.posts = posts
  },
  POST_STATUS_CLEAR: (state) => {
    state.postAddStatus = 'ready'
  },
  NEW_POST_REQUEST: (state) => {
    state.postAddStatus = 'loading'
  },
  NEW_POST_SUCCESS: (state) => {
    state.postAddStatus = 'success'
    // state.posts = posts
  },
   NEW_POST_ERROR: (state) => {
    state.postAddStatus = 'error'
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
