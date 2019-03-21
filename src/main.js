import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Picker from '@/components/picker/index'
import Actionsheet from '@/components/actionsheet/index'
import Cell from '@/components/cell/index'

Vue.use(Picker)
Vue.use(Actionsheet)
Vue.use(Cell)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
