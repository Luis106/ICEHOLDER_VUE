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
    path: '/Personal',
    name: 'Personal',

    component: () => import('../views/Usuarios.vue')
  },
  {
    path: '/PersonalPapelera',
    name: 'PersonalPapelera',

    component: () => import('../views/UsuariosPa.vue')
  },
  {
    path: '/Productos',
    name: 'Productos',

    component: () => import('../views/Productos.vue')
  },
  {
    path: '/ProductosPapelera',
    name: 'ProductosPapelera',

    component: () => import('../views/ProductosPa.vue')
  },
  {
    path: '/CAJA',
    name: 'CAJA',

    component: () => import('../views/Caja.vue')
  },
  {
    path: '/TERMINAR',
    name: 'TERMINAR',

    component: () => import('../views/Terminar.vue')
  },
  {
    path: '/MENU',
    name: 'MENU',

    component: () => import('../views/Menu.vue')
  },
  {
    path: '/CORTE',
    name: 'CORTE',

    component: () => import('../views/Corte.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
