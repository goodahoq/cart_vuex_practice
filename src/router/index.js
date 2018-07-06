import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import detail from '@/components/detail'
import checkout from '@/components/checkout'
import navbar from '@/components/navbar'
import cartPage from '@/components/cartPage'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/home',
      name: 'Home',
      component: home,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: checkout,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: detail,
    },
    {
      path: '/cartPage',
      name: 'CartPage',
      component: cartPage,
    },
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})
