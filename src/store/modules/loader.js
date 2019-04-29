const state = {
  requestCount: 0
}

//functions receive state
const getters = {
  isAxiosLoading: state => state.requestCount > 0
}

//functions receive context and params
const actions = {

}

//functions receive state
const mutations = {
  addRequest (state) {
    state.requestCount ++
  },
  subtractRequest (state) {
    if (state.requestCount > 0)
      state.requestCount --
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
