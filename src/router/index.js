import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import LaPaletteDuGout from "../views/LaPaletteDuGout.vue";
import LaFrancaise from "../views/LaFrancaise.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        // component: () => import('../views/Home.vue')
    },
    {
        path: '/LaPaletteDuGout',
        name: 'La Palette Du Gout',
        component: LaPaletteDuGout,
        // component: () => import(/* webpackChunkName: 'LaPaletteDuGout' */'@/views/LaPaletteDuGout.vue')
    },
    {
        path: '/LaFrancaise',
        name: 'A La Francaise',
        component: LaFrancaise,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;