// import dataBase from '../../api/dataBase'
// import router from '../../router/index'

// initial state
const state = {
  globalWarning: {
    message: '',
    status: ''
  },

}

// getters
const getters = {
  getGlobalWarning: state => {
    return state.globalWarning
  }
}

// actions
const actions = {
  globalWarning ({commit, dispatch}, warning) {
    commit('setGlobalWarning', warning)
  },
  clearWarning ({commit}) {
    commit('CLEAR_WARNING')
  }
}

// mutations
const mutations = {
  setGlobalWarning (state, warning) {
    state.globalWarning.message = warning.message;
    state.globalWarning.status = warning.status;
  },
  CLEAR_WARNING: (state) => {
    state.globalWarning.message = '';
    state.globalWarning.status = '';
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
