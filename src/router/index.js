import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const About = () => import('@/views/About/about.vue')
const Product = () => import('@/views/Product/Product.vue')
const Mtool = () => import('@/views/Mtool/Mtool.vue')
const ProductDetails = () => import('@/views/ProductDetails/ProductDetails.vue')
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/product/:id?',
    name: 'Product',
    component: Product
  }, {
    path: '/mtool',
    name: 'Mtool',
    component: Mtool
  }, {
    path: '/productDetails/:id?',
    name: 'ProductDetails',
    component: ProductDetails
  }]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
