import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruck, faPhoneVolume, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTruck, faPhoneVolume, faArrowsRotate)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')