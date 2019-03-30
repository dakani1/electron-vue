const state = {
  main: 0,
  test: 'counter test'
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  testMuta (state) {
    state.test = 'counter test change 111'
  }
}

const getters = {
  testGetter1 (state) {
    return state.test
  },
  getAllSort (state) {
    return 'allSort counter'
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  testAction ({ commit }) {
    console.log(2222)
    commit('testMuta')
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
