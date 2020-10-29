import Vue from 'vue'
import App from './App'
import Page from "@/components/page/Page";
// vuex
import store from "./store"
Vue.prototype.$store = store

// uView框架
import uView from "uview-ui"
import {mixins} from "@/utils/mixins";
Vue.use(uView)

Vue.config.productionTip = false


Vue.component("Page", Page)

Vue.mixin(mixins.feedBackMixin)

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
