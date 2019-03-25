import ButtonGroup from './buttongroup.vue'
import './buttongroup.styl'

ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
