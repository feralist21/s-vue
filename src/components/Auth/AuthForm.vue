<script setup>
import { ref } from 'vue';
import { authUser } from '@/api/authApi';
import { useRouter } from 'vue-router';
import { saveToLocalStorage } from '@/helpers/localStorage';
import { notify } from '@kyvg/vue3-notification';

const login = ref('');
const password = ref('');
const router = useRouter();

const loginUser = async () => {
    if (login.value === '' || password.value === '') {
        notify({
            type: 'error',
            title: 'Ошибка',
            text: 'Заполните все поля!',
        });
        return;
    }

    try {
        const response = await authUser({
            identifier: login.value,
            password: password.value,
        });

        if (response?.error?.status === 400) {
            notify({
                type: 'error',
                title: response.error.name,
                text: response.error.message,
            });

            return;
        }

        saveToLocalStorage('token', response.jwt);

        login.value = '';
        password.value = '';
        
        router.push({ name: 'main' });
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <div class="p-10 shadow-md rounded-md">
        <h1 class="text-2xl block mb-4">Войти</h1>
        <form class="flex flex-col gap-y-5" @submit.prevent="loginUser">
            <div class="flex flex-col gap-y-2">
                <label class="block" for="userName">Логин</label>
                <input
                    class="block outline-none border-2 border-slate-400 p-2"
                    type="text"
                    name="userName"
                    id="userName"
                    v-model="login"
                />
            </div>
            <div class="flex flex-col gap-y-2">
                <label class="block" for="password">Пароль</label>
                <input
                    class="block outline-none border-2 border-slate-400 p-2"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                />
            </div>
            <button class="block py-3 outline-none bg-green-500 text-white" type="submit">
                Send
            </button>
        </form>
    </div>
</template>
