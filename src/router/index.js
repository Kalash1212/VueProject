import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentsDisplay from '../views/ComponentsDisplay.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ComponentsDisplay
  },
  {
    path: '/AddPayment/:type/:value',
    name: 'AddPaymentFormFull',
    component: () => import('../components/AddPaymentForm.vue')
  },
  {
    path: '/AddPayment/:type',
    name: 'AddPaymentForm',
    component: () => import('../components/AddPaymentForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
