import Vue from 'vue'
import Axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// import elementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.use(elementUi)
Vue.use(Antd)
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
