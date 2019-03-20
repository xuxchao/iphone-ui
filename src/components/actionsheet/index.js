import ActionSheet from './actionsheet.vue'
import './actionsheet.css'

ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet)
}

export default ActionSheet
