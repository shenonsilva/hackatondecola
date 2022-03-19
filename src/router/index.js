import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio'
import MeusLocais from '../views/MeusLocais'
import CuidadosCovid from '../views/CuidadosCovid'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  }, 
  {
    path: '/locais',
    name: 'MeusLocais',
    component: MeusLocais
  }, 
  {
    path: '/covid',
    name: 'CuidadosCovid',
    component: CuidadosCovid
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
