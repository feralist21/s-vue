<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getFromLocalStorage } from '@/helpers/localStorage';
import LayoutWrapper from '@components/Layout/LayoutWrapper.vue';

const router = useRouter();

onMounted(() => {
    const token = getFromLocalStorage('token');

    if (!token) {
        router.push('auth');
        return;
    }

    router.push({ name: 'main' });
});
</script>

<template>
    <LayoutWrapper/>
    <notifications position="bottom center" />
</template>
