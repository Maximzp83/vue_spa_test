import router from './index'
import store from '../store/index'



const middlewares = router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isAuthenticated']) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }

})

export default middlewares;


  
