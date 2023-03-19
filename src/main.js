import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入libs
import libs from '@/libs'

import '@/assets/reset.scss'


Vue.config.productionTip = false

Vue.use(libs)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
