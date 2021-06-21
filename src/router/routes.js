// 引入Home
import Home from '@/pages/Home'
// 引入Login
import Login from '@/pages/Login'
// 引入Search
import Search from '@/pages/Search'
// 引入 Register
import Register from '@/pages/Register'
// 暴露
export default[
        // 注册路由
        {
                path:'/',
                component:Home
        },
        // 注册Search路由
        {
                path:'/search',
                component:Search
        },
         // 注册Login路由
        {
                path:'/login',
                component:Login,
                meta:{isFooterHide:true}


                
        },
        // 注册Register路由
        {
                path:'/register',
                component:Register,
                meta:{isFooterHide:true}
        },
        {
                path:'/',
                redirect:'/'
        }
]
