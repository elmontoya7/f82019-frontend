import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './assets/theme.scss'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

import FeatherWrapper from 'vue-feather-icons-wrapper'
Vue.use(FeatherWrapper)

import Moment from 'moment-timezone'
Moment.locale('es')
Vue.prototype.$moment = Moment

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VueAuthenticate from 'vue-authenticate'
Vue.use(VueAuthenticate, {
  baseUrl: 'https://656e0bf4.ngrok.io/backend/api',
  tokenName: 'access_token',
  providers: {
    facebook: {
      clientId: process.env.VUE_APP_FACEBOOK_APP_ID,
      redirectUri: `${window.location.origin}/callback`,
      scope: []
    }
  }
})

import Request from './helpers/request'
Vue.use(Request)

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: '#409EFF',
  failedColor: 'rgb(245, 108, 108)',
  thickness: '2px',
  autoFinish: false,
  transition: {
    speed: '.8s',
    opacity: '.2s',
    termination: 800
  }
})

import VeeValidate from 'vee-validate'
import dictionary from './data/errors-dictionary-es'
Vue.use(VeeValidate, {
  locale: 'es',
  dictionary,
  fieldsBagName: 'veeFields',
  mode: 'eager'
})

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading, {
  color: '#0e5ccf',
  zIndex: 2000,
  height: 70,
  width: 70,
  opacity: 0.6
});
import LoadingScreen from './helpers/loading-screen-controller'
Vue.use(LoadingScreen)

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
