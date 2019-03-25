import BackTop from './backtop.vue'
import './backtop.styl'

BackTop.install = function (Vue) {
  Vue.component(BackTop.name, BackTop)
}

export default BackTop
