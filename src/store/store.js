import Vue from 'vue'
import Vuex from 'vuex'

//modules
import auth from './modules/auth'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth: {
      namespaced: true,
      ...auth
    },
    loader: {
      namespaced: true,
      ...loader
    }
  }
})
