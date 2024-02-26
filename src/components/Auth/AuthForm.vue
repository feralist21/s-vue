<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const user = {
        identifier: "feralist21@gmail.com",
        password: "zxc123zxc",
    };

    fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((responce) => responce.json())
    .then((data) => console.log(data));
});
</script>

<template>
    <div class="p-10 shadow-md rounded-md">
        <h1 class="text-2xl block mb-4">Войти</h1>
        <form class="flex flex-col gap-y-5" action="">
            <div class="flex flex-col gap-y-2">
                <label class="block" for="userName">Логин</label>
                <input
                    class="block outline-none border-2 border-slate-400 p-2"
                    type="text"
                    name="userName"
                    id="userName"
                />
            </div>
            <div class="flex flex-col gap-y-2">
                <label class="block" for="password">Пароль</label>
                <input
                    class="block outline-none border-2 border-slate-400 p-2"
                    type="password"
                    name="password"
                    id="password"
                />
            </div>
            <button class="block py-3 outline-none bg-green-500 text-white">Send</button>
        </form>
    </div>
</template>
