import Vue from 'vue'
import VueRouter from 'vue-router'
import addOrder from '../views/addOrder'
import orderList from '../views/orderList'
import changePwd from '../views/changePwd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/addOrder',
    component: addOrder,
    name: 'addOrder'
  },
  {
    path: '/orderList',
    component: orderList,
    name: 'orderList'
  },
  {
    path: '/changePwd',
    component: changePwd,
    name: 'changePwd'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

export default router
