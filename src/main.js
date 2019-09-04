import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import DT from './plugins/DT'

Vue.use(DT)
Vue.config.productionTip = false
debugger
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
