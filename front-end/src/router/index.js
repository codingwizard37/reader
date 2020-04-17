import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/read/',
    name: 'Read',
    component: () => import( /* webpackChunkName: "read" */ '../views/Read.vue')
  },
  {
    path: '/read/:book',
    name: 'Book',
    component: () => import( /* webpackChunkName: "book" */ '../views/Book.vue')
  },
  {
    path: '/read/:book/:chapter',
    name: 'Chapter',
    component: () => import(/* webpackChunkName: "chapter" */ '../views/Chapter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
