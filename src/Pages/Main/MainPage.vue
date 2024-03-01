<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getArticlesList } from '@/api/articlesApi';
import { clearLocalStorage } from '@/helpers/localStorage';
import HeaderMain from '@/components/Header/HeaderMain.vue';

const router = useRouter();

onMounted(() => {
    getArticlesList()
        .then((data) => {
            if (data?.error?.status === 401) {
                clearLocalStorage('token');
                router.push('auth');
                return;
            }
        })
        .catch((error) => console.log(error));
});
</script>

<template>
    <HeaderMain />
</template>

<style scoped></style>
