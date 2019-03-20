import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/picker',
      name: 'picker',
      component: () => import(/* webpackChunkName: "picker" */ './views/Picker.vue')
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: () => import(/* webpackChunkName: "picker" */ './views/Actionsheet.vue')
    }
  ]
})
