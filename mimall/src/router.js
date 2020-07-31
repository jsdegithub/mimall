import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            redirect: '/index',  //redirect指向Home组件的<router-view></router-view>部分
            children: [
                {
                    path: '/index',
                    component: Index,
                }, {
                    path: '/product/:id',
                    component: resolve => require(['./pages/product.vue'], resolve),
                }, {
                    path: '/detail/:id',
                    component: resolve => require(['./pages/detail.vue'], resolve),
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['./pages/login.vue'], resolve),
        },
        {
            path: '/cart',
            component: resolve => require(['./pages/cart.vue'], resolve),
        },
        {
            path: '/order',
            component: resolve => require(['./pages/order.vue'], resolve),
            children: [
                {
                    path: 'list',
                    component: resolve => require(['./pages/orderList.vue'], resolve),
                },
                {
                    path: 'confirm',
                    component: resolve => require(['./pages/orderConfirm.vue'], resolve),
                },
                {
                    path: 'pay',
                    component: resolve => require(['./pages/orderPay.vue'], resolve),
                },
                {
                    path: 'alipay',
                    component: resolve => require(['./pages/alipay.vue'], resolve),
                }
            ]
        }
    ]
});