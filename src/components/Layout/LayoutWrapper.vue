<script setup>
import HeaderMain from '@/components/Header/HeaderMain.vue';
import ContainerWrapper from '@components/Container/ContainerWrapper.vue';
</script>

<template>
    <div class="flex flex-col h-screen">
        <HeaderMain />
        <main class="flex-grow py-5">
            <ContainerWrapper>
                <RouterView />
            </ContainerWrapper>
        </main>
        <footer class="py-5 border-t-2 border-slate-400">
            <ContainerWrapper>
                <p>I am footer</p>
            </ContainerWrapper>
        </footer>
    </div>
</template>
