import CheckBox from './checkbox.vue'
import './checkbox.styl'

CheckBox.install = function (Vue) {
  Vue.component(CheckBox.name, CheckBox)
}

export default CheckBox
