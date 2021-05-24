import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Task_tracker from "@/views/Task_tracker";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Albumlist',
    name: 'Albumlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Albumlist.vue')
  },
  {
    path: '/TaskTracker',
    name: 'TaskTracker',
    component: () => import('../views/Task_tracker')
  },
  {
    path: '/Buildings',
    name: 'Buildings',
    component: () => import('../views/Buildings')
  },
  {
    path: '/ReactionTimer',
    name: 'ReactionTimer',
    component: () => import('../views/ReactionTimer')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
