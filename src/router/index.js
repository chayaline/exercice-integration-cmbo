import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import productDetails from '../components/product-details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: ':id',
    props: true,
    component: productDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
