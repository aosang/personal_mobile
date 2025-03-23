import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const About = () => import('@/views/About/about.vue')
const Product = () => import('@/views/Product/Product.vue')
const Mtool = () => import('@/views/Mtool/Mtool.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/product',
    name: 'Product',
    component: Product
  }, {
    path: '/mtool',
    name: 'Mtool',
    component: Mtool
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
