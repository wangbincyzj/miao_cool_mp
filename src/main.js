import Vue from 'vue'
import App from './App'

// vuex
import store from "./store"
Vue.prototype.$store = store

// uView框架
import uView from "uview-ui"
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
