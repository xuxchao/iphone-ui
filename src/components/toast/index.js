import Toast from './_toast'
import './toast.styl'

Toast.install = function (Vue) {
  Vue.prototype['$toast'] = Toast
}

export default Toast
