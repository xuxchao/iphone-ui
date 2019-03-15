import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Picker from '@/components/picker/index'

Vue.use(Picker)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
