import Vue from 'vue'
import App from './App'
import VueFlipcard from '../src'

Vue.component('vue-flipcard', VueFlipcard)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

