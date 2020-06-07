import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/globle.css"
import elementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/reset.min.css"
import "./assets/fontClass/iconfont.css"
import "./assets/rem"
// import {Button,Icon} from "vant"
// Vue.use(Button).use(Icon)
Vue.config.productionTip = false
Vue.use(elementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
