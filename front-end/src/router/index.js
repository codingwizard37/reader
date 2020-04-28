import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Book from '../views/Book.vue'
import Chapter from '../views/Chapter.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

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
    component: About,
    meta: {
      title: "Parallel | About"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Parallel | Contact"
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
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
