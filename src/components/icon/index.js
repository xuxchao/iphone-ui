import Icon from './icon.vue'
import './icon.styl'

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}

export default Icon
