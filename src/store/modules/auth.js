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
        context.commit('changeAuthStatus')
        params.callback({ success: true })
      }
    } catch (e) {
      console.error(e)
      params.callback({ error: 'An unexpected error ocurred.' })
    }
  },
  async user (context, params) {
    try {
      let fields = ['id', 'name', 'first_name', 'last_name'],
          url = 'https://graph.facebook.com/v3.2/me?fields=' + fields.join(',') + '&access_token=' + Vue.prototype.$auth.getToken()

      let response = await Vue.axios.get(url)
      if (response.data.error) {
        params.callback({ success: false, error: response.data.error })
      } else {
        params.callback({ success: true, resource: response.data })
      }
    } catch (e) {
      console.error('user:', e);
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
