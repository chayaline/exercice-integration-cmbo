import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import productDetails from '../components/product-details'
import notFound from '../components/not-found'

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
  },
  {
    path: '*',
    name: 'Not Found',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
