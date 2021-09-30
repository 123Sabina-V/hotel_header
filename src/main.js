import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy, {
  iconfont: 'md'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
