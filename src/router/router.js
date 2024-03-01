import { createRouter, createWebHistory } from 'vue-router';

import AuthPage from '@components/Pages/Auth/AuthPage.vue';
import MainPage from '@components/Pages/Main/MainPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage,
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthPage,
        },
    ],
});

export default router;
