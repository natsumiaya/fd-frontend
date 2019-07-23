import Vue from 'vue'
import App from './App.vue'
import router from './__router/index'
import store from './__store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
