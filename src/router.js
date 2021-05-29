  import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/team',
    component: () => import('./views/Team.vue')
  },
  {
    path: '/project',
    component: () => import('./views/Project.vue')
  },
  {
    path: '/xxxt',
    component: () => import('./views/Xxxt.vue')
  }
]

const router = createRouter({ history: createWebHashHistory(), routes }) 

export default router