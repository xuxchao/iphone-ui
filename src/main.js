import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Picker from '@/components/picker/index'
import Actionsheet from '@/components/actionsheet/index'
import Cell from '@/components/cell/index'
import Radio from '@/components/radio/index'
import Radiogroup from '@/components/radiogroup/index'
import Checkbox from '@/components/checkbox/index'
import Switch from '@/components/switch/index'
import Button from '@/components/button/index'
import Buttongroup from '@/components/buttongroup/index'
import Icon from '@/components/icon/index'
import Badge from '@/components/badge/index'
import Backtop from '@/components/backtop/index'
import Toast from '@/components/toast/index'

Vue.use(Picker)
Vue.use(Toast)
Vue.use(Actionsheet)
Vue.use(Cell)
Vue.use(Radio)
Vue.use(Radiogroup)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(Button)
Vue.use(Buttongroup)
Vue.use(Icon)
Vue.use(Badge)
Vue.use(Backtop)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
