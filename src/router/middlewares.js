import router from './index'
import store from '../store/index'

const middlewares = router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log('requiresAuth')
    if (store.getters['auth/isAuthenticated']) {
      next()
    } else {
      store.dispatch('globalWarning', {
        message: 'this page is only available to logged-in users',
        status: 'warning' 
      })
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else if (to.matched.some(record => record.meta.editPostGuard)) {

    if ( store.getters['auth/isAuthenticated'] ) {
      const post = store.getters['posts/getPostById'](to.params.id);
      const user = store.getters['auth/authUser'];
      if (post && user ) {
        if ( post.userId == user.id ) {
          // console.log('ok')
          next()
        } else {
          // console.log(store)
        }
      } else {
          store.dispatch('globalWarning', {
            message: 'post or user not founded',
            status: 'error' 
          })
          next({
            path: '/',
            query: { redirect: to.fullPath }
          })
        }
    }
    // console.log(store.state.posts.posts)
    // console.log(store.getters['posts/getPostById'](to.params.id))
    // console.log(to.params.id)

  } else {

    next() // всегда так или иначе нужно вызвать next()!
  }   

})

export default middlewares;


  
