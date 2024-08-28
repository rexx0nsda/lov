<template>
    <div class="bg">
        <h1 class="h1">Туда попасть не так просто</h1>
        <div class="imgs">
            <transition-group>
                <img v-if="laught" src="/src/assets/ezgif-2-c4e88c2f18.gif" alt="">
                <img v-else-if="!next" src="/src/assets/ezgif-2-b73a8e1b26.gif" alt="">
                <img v-else src="/src/assets/ezgif-3-e1c1c03d23.gif" alt="">
            </transition-group>
        </div>
        <transition>
            <template v-if="!laught">
                <h2 v-if="!next">Хорошая попытка. Узнай логин,пароль и возвращайся</h2>
                <h2 v-else>Ладно тебе удалось найти пароль и логин</h2>
            </template>
        </transition>
        <form action="" @submit.prevent>
            <input class="input" v-model="login" type="text" name="login" id="1"
                   placeholder="Логин">
            <input class="input" v-model="password" type="password" name="password" id="2"
                   placeholder="Пароль">
            <button class="button" @click="Next(login, password)">Зайти</button>
        </form>
        <transition mode="out-in" name="fade">
            <button v-if="pod" class="pod" @click="usePod">Использовать подсказку</button>
            <p v-else>Подсказка: Ищи латинские слова в сообщениях</p>
        </transition>
    </div>
</template>

<script setup>
import {ref} from "vue";
import router from "../router/router.js";

let laught = ref(true)
let pod = ref(true)
let next = ref(false)
let login = ref('')
let password = ref()
const AnsLogin = ref('Maria')
const AnsPassword = ref('love')

function usePod() {
    pod.value = false
}

function Next(loginIn, passwordIn) {
    if (loginIn === AnsLogin.value) {
        if (AnsPassword.value === passwordIn) {
            next.value = true
            laught.value = false
            console.log('next change')
            setTimeout(() => {
                router.push({
                    name: 'main',
                })
            }, "5000");
        }
    } else {
        laught.value = false
    }

    login.value = ''
    password.value = ''
}
</script>

<style scoped>
.imgs {
    max-width: 250px;
    margin-bottom: 275px;
    position: relative;

    img {
        position: absolute;
        left: 0%;
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

img {
    max-width: 250px;
    transition: 200ms;
}

.pod {
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 5px;
    max-width: 225px;
}

p {
    font-size: 20px;
    margin-top: 20px;
}

.bg {
    max-width: 100%;
    max-height: 100%;
    background: linear-gradient(180.00deg, rgb(255, 79, 79), rgb(217, 105, 105) 100%);
    background-size: 100%;
    height: 100vh;
}

.h1 {
    font-size: 40px;
    padding-top: 50px;
    margin-top: 0;
    font-style: italic;
}

h2 {
    color: white;
    font-size: 30px;
    transition: 200ms;
}

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: 20px;
}

input {
    padding: 20px;
    border-radius: 20px;
    max-width: 358px;
    font-size: 20px;
    color: white;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid white;
}

input::placeholder {
    color: white;
}

button:hover {
    background: rgb(255 255 255 / 34%);
}

button {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid white;
    color: white;
    padding: 20px;
    border-radius: 20px;
    font-size: 20px;
    max-width: 180px;
    width: 100%;
}

@media screen and (max-width: 642px) {
    .imgs {
        margin-bottom: 225px;
    }

    img {
        max-width: 200px;
    }

    .input {
        font-size: 16px;
        max-width: 250px;
        padding: 10px;
    }

    .button {
        font-size: 16px;
        padding: 10px;
        max-width: 130px;
    }

    .h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }

    form {
        gap: 10px;
        margin-top: 50px;

    }
}
</style>