import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component:Home
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出
export default router