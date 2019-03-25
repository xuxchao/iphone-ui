import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Picker from '@/components/picker/index'
import Actionsheet from '@/components/actionsheet/index'
import Cell from '@/components/cell/index'
import Radio from '@/components/radio/index'
import Radiogroup from '@/components/radiogroup/index'
import Checkbox from '@/components/checkbox/index'

Vue.use(Picker)
Vue.use(Actionsheet)
Vue.use(Cell)
Vue.use(Radio)
Vue.use(Radiogroup)
Vue.use(Checkbox)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
