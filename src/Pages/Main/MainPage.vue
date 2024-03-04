<script setup>
import { onMounted } from 'vue';
import { getArticlesList } from '@/api/articlesApi';

onMounted(() => {
    getArticlesList()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error));
});
</script>

<template>
    <div>main page</div>
</template>

<style scoped></style>
