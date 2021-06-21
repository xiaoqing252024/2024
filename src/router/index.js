import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes组件
import routes from './routes'
Vue.use(VueRouter)
export default new VueRouter({
        mode:'history',
        routes
})
