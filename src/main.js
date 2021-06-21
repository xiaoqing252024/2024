import Vue from 'vue'
import App from './App.vue'
import router  from './router'
Vue.config.productionTip = false

let VM = new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router
}).$mount('#app')