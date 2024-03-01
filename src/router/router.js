import { createRouter, createWebHistory } from 'vue-router';

import AuthPage from '@/Pages/Auth/AuthPage.vue';
import MainPage from '@/Pages/Main/MainPage.vue';
import ProfilePage from '@/Pages/Profile/UserProfile.vue';

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
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePage,
        },
    ],
});

export default router;
