//libraries
import Vue from 'vue'
import ProviderTranslator from '../../helpers/provider-translator'

const state = {
  isAuth: false
}

//functions receive state
const getters = {
  isAuthenticated (state) {
    return Vue.prototype.$auth.isAuthenticated()
  },
  authToken (state) {
    return Vue.prototype.$auth.isAuthenticated() ? Vue.prototype.$auth.getToken() : null
  }
}

//functions receive context and params
const actions = {
  async logout (context, params) {
    try {
      await Vue.prototype.$auth.logout()
      context.commit('changeAuthStatus')
    } catch (e) {
      console.error('Logout:', e)
    }
  },
  async authenticate (context, params) {
    try {
      if (!params.provider || ProviderTranslator(params.provider) === undefined) {
        params.callback({ error: 'Authentication platform not provided.' })
        return
      }
      let response = await Vue.prototype.$auth.authenticate(ProviderTranslator(params.provider))
      if (response.data.success) {
        params.callback({ success: true, platform: params.provider, data: response.data.data })
      } else {
        params.callback({ error: 'Something went wrong. Try again.' })
      }
    } catch (e) {
      console.error(e)
      params.callback({ error: 'Something went wrong. Try again.' })
    }
  }
}

//functions receive state
const mutations = {
  changeAuthStatus (state) {
    state.isAuth = Vue.prototype.$auth.isAuthenticated()
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
