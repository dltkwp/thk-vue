import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * 引入 momentJs 和 lodashJs
 */
import LodashPlugin from './utils/lodash.js'
import MomentPlugin from './utils/moment.js'

Vue.use(LodashPlugin)
Vue.use(MomentPlugin)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

import './filter/index'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
