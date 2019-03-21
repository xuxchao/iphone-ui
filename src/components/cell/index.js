import Cell from './cell.vue'
import './cell.styl'

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

export default Cell
