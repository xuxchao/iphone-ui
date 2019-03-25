import Button from './button.vue'
import './button.styl'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
