import Vue from 'vue'

const state = {
  requestCount: 0
}

//functions receive state
const getters = {
  isAxiosLoading: state => state.requestCount > 0
}

//functions receive context and params
const actions = {
  async getMessages (context, params) {
    try {
      let response = await Vue.axios.post(process.env.VUE_APP_API + '/sentiment-messages', params)
      if (response.data.success && params.callback) {
        params.callback(response.data)
      } else {
        if (params.callback)
          params.callback({ success: false })
      }
    } catch (e) {
      console.error(e);
      if (params.callback)
        params.callback({ success: false, error: e.message })
    }
  }
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
