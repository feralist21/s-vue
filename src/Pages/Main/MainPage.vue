<script setup>
import { onMounted } from 'vue';
import { getArticlesList } from '@/api/articlesApi';
import HeaderMain from '@/components/Header/HeaderMain.vue';

onMounted(() => {
    getArticlesList()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error));
});
</script>

<template>
    <HeaderMain />
</template>

<style scoped></style>
