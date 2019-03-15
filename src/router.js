import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/',
      name: 'picker',
      component: () => import(/* webpackChunkName: "picker" */ './views/Picker.vue')
    }
  ]
})
