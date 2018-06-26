import authorsDataBase from '../../api/authorsDataBase'
import router from '../../router/index'

// initial state
const state = {
  authUser: JSON.parse( localStorage.getItem('authUser') ) || '',
  status: '',
  
}

// getters
const getters = {

  isAuthenticated: state => !!state.authUser,
  
  authStatus: state => state.status,

  authUser: state => {
    // console.log(state.authUser)
    return state.authUser
  }

}

// actions
const actions = {

  login_Attempt: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => { // The Promise used for router redirect in login
      commit('AUTH_REQUEST')

      authorsDataBase.getUser(user.userId, (authUser) => {
        commit('AUTH_SUCCESS', authUser)
        resolve()
        },
        () => {
          commit('AUTH_ERROR')
          resolve()
        }
      )

    }).then(() => {
        // console.log('authStatus: ', state.status)
        if (state.status == 'success') {
          // console.log( state.authUser )
          localStorage.setItem('authUser', JSON.stringify(state.authUser) ) // store the token in localstorage
          router.push('/')          
          // console.log(router)
        } else {

        }
      })
  },

  logout: ({commit, dispatch}) => {
      commit('LOG_OUT')
      router.push('/')               
  }


}

// mutations
const mutations = {
  
  AUTH_REQUEST: (state) => {
    state.status = 'loading'
  },
  AUTH_SUCCESS: (state, authUser) => {
    state.status = 'success'
    state.authUser = authUser
  },
  AUTH_ERROR: (state) => {
    state.status = 'error'
  },
  LOG_OUT: (state) => {
    state.status = ''
    state.authUser = null
    localStorage.removeItem('authUser')
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
