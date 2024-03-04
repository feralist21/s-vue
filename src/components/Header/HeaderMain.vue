<script setup>
import ContainerWrapper from '@components/Container/ContainerWrapper.vue';
</script>

<template>
    <div class="py-6 border-b-2 border-slate-400">
        <ContainerWrapper class="flex justify-between items-center">
            <h1 class="text-orange-500 text-2xl font-medium">
                <router-link class="flex gap-x-2 items-center" to="/">
                    Family Fintess Helper
                </router-link>
            </h1>
            <router-link class="flex gap-x-2 items-center" to="/profile">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p>Профиль</p>
            </router-link>
        </ContainerWrapper>
    </div>
</template>
