import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Book from '../views/Book.vue'
import Chapter from '../views/Chapter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Parallel | Home"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      title: "Parallel | About"
    }
  },
  {
    path: '/read/:book',
    name: 'Book',
    component: Book,
  },
  {
    path: '/read/:book/:chapter',
    name: 'Chapter',
    component: Chapter,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
