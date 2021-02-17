import { createRouter, createWebHistory } from 'vue-router';
import childrenRouter from './childrenRoute.js';

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: childrenRouter
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
