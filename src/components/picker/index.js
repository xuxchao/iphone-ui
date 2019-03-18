import Picker from './picker.vue'
import './picker.stylus'
// import './picker.css'

Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
}

export default Picker
