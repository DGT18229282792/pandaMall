import Vue from 'vue'
import Router from 'vue-router'

import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
import Admin from '@/views/admin'
import GoodsAdmin from '@/components/GoodsAdmin'
import AdminLogin from '@/views/AdminLogin'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    // 前端路由
    {
      path: '/',
      name: 'GoodsList',
      component:GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component:Cart
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/address',
      name: 'Address',
      component:Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component:OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component:OrderSuccess
    },
    //后台路由
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      children:[
        {
          path:'goodsAdmin',
          component:GoodsAdmin
        }
      ]
    },
    {
      path:'/adminlogin',
      name:'AdminLogin',
      component:AdminLogin
    }
  ]
})
