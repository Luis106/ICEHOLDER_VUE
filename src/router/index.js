import Vue from 'vue'
import VueRouter from 'vue-router'
import LOGIN from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LOGIN',
    component: LOGIN
  },
  {
    path: '/CITA',
    name: 'CITA',

    component: () => import('../views/Citas.vue')
  },
  {
    path: '/Productos',
    name: 'Productos',

    component: () => import('../views/Productos.vue')
  },
  {
    path: '/Agendar',
    name: 'Agendar',

    component: () => import('../views/CitaAgendar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
