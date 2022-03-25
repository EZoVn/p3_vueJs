import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/LaPaletteDuGout',
        name: 'La Palette Du Gout',
        component: () => import(/* webpackChunkName: 'LaPaletteDuGout' */'@/views/LaPaletteDuGout.vue')
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;