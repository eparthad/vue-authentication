import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Home from '../views/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { 
        guest: true 
    }
  },
  {
    path: '/registration',
    name: 'Register',
    component: Register,
    meta: { 
        guest: true 
    }
  },
  {
    path: '/admin/home',
    name: 'Home',
    component: Home,
    meta: { 
        auth: true 
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (!store.getters.GET_AUTH_STATUS) {
        next({
          name : 'Login'
        })
      } else {
        next()
      }
    }else if (to.matched.some(record => record.meta.guest)) {
        if (store.getters.GET_AUTH_STATUS) {
          next({
            name : 'Home'
          })
        } else {
          next()
        }
    } else {
      next() // make sure to always call next()!
    }


})

export default router
