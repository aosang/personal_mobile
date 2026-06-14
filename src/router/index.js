import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const About = () => import('@/views/About/About.vue')
const Product = () => import('@/views/Product/Product.vue')
const Mtool = () => import('@/views/Mtool/Mtool.vue')
const ProductDetails = () => import('@/views/ProductDetails/ProductDetails.vue')
const Article = () => import('@/views/Article/Article.vue')
const ArticleDetails = () => import('@/views/Article/ArticleDetails.vue')

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
  }, {
    path: '/article',
    name: 'Article',
    component: Article
  }, {
    path: '/articleDetails/:id',
    name: 'ArticleDetails',
    component: ArticleDetails
  }]

const router = createRouter({
  // 部署在站点根路径用 '/'；若挂在子路径（如 /mymobile/），改为 createWebHistory('/mymobile/')
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
