import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import LaPaletteDuGout from "../views/LaPaletteDuGout.vue";
import LaNoteEnchantee from "../views/LaNoteEnchantee.vue";
import LaFrancaise from "../views/LaFrancaise.vue";
import LeDeliceDeSens from "../views/LeDeliceDeSens.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: "Acceuil",
        }
        // component: () => import('../views/Home.vue')
    },
    {
        path: '/LaPaletteDuGout',
        name: 'La Palette Du Gout',
        component: LaPaletteDuGout,
        meta: {
            title: "La Palette Du Gout",
        }
        // component: () => import(/* webpackChunkName: 'LaPaletteDuGout' */'@/views/LaPaletteDuGout.vue')
    },
    {
        path: '/LaNoteEnchantee',
        name: 'La Note Enchantée',
        component: LaNoteEnchantee,
        meta: {
            title: "La Note Enchantée",
        }
    },
    {
        path: '/LaFrancaise',
        name: 'A La Francaise',
        component: LaFrancaise,
        meta: {
            title: "A La Française",
        }
    },
    {
        path: '/LeDeliceDeSens',
        name: 'Les Délices Des Sens',
        component: LeDeliceDeSens,
        meta: {
            title: "Les Délices Des Sens",
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;