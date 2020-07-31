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
                    component: () => import('./pages/product.vue'),
                }, {
                    path: '/detail/:id',
                    component: () => import('./pages/detail.vue'),
                }
            ]
        },
        {
            path: '/login',
            component: () => import('./pages/login.vue'),
        },
        {
            path: '/cart',
            component: () => import('./pages/cart.vue'),
        },
        {
            path: '/order',
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'list',
                    component: () => import('./pages/orderList.vue'),
                },
                {
                    path: 'confirm',
                    component: () => import('./pages/orderConfirm.vue'),
                },
                {
                    path: 'pay',
                    component: () => import('./pages/orderPay.vue'),
                },
                {
                    path: 'alipay',
                    component: () => import('./pages/alipay.vue'),
                }
            ]
        }
    ]
});