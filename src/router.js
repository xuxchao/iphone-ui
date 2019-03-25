import Vue from 'vue'
import Router from 'vue-router'
import Nav from './views/Demonav.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
        demonav: Nav
      }
    },
    {
      path: '/picker',
      name: 'picker',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Picker.vue'),
        demonav: Nav
      }
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Actionsheet.vue'),
        demonav: Nav
      }
    },
    {
      path: '/cell',
      name: 'cell',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Cell.vue'),
        demonav: Nav
      }
    },
    {
      path: '/radio',
      name: 'radio',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Radio.vue'),
        demonav: Nav
      }
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Checkbox.vue'),
        demonav: Nav
      }
    },
    {
      path: '/switch',
      name: 'switch',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Switch.vue'),
        demonav: Nav
      }
    },
    {
      path: '/button',
      name: 'button',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Button.vue'),
        demonav: Nav
      }
    },
    {
      path: '/buttongroup',
      name: 'buttongroup',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Buttongroup.vue'),
        demonav: Nav
      }
    },
    {
      path: '/backtop',
      name: 'backtop',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Backtop.vue'),
        demonav: Nav
      }
    },
    {
      path: '/toast',
      name: 'toast',
      components: {
        main: () => import(/* webpackChunkName: "picker" */ './views/Toast.vue'),
        demonav: Nav
      }
    }
  ]
})
