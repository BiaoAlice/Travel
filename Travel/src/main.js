// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.prototype.$http=axios
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
