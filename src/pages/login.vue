<template>
    <div class="bg">
        <h1>🤤</h1>
        <form action="" @submit.prevent>
            <input class="input" :value="login" @input="login = $event.target.value" type="text" name="login" id="1"
                   placeholder="Логин">
            <input class="input" :value="password" @input="password = $event.target.value" type="password" name="password" id="2"
                   placeholder="Пароль">
            <button class="button" @click="Next(login, password)">Зайти</button>
            <h2>{{text}}</h2>
        </form>
    </div>
</template>

<script setup>
import {ref} from "vue";
import router from "../router/router.js";

let text = ref('')
let login = ref('')
let password = ref()
const AnsLogin = ref('Love')
const AnsPassword = ref('maria')

function Next(loginIn, passwordIn) {
    console.log(loginIn, passwordIn)
    if (loginIn === AnsLogin.value) {
        console.log("complete")
        if (AnsPassword.value === passwordIn) {
            console.log("comp")
            router.push({
                name: 'main',
            })
        }
    }
    else {
        text.value = "Неправильный логин или пароль. Попробуйте еще раз"
    }

    login.value = ''
    password.value = ''
}
</script>

<style scoped>

.bg {
    max-width: 100%;
    max-height: 100%;
    background: linear-gradient(180.00deg, rgb(255, 79, 79), rgb(217, 105, 105) 100%);
    background-size: 100%;
    height: 100vh;
}

h2 {
    color: white;
}
h1 {
    font-size: 96px;
    padding-top: 146px;
}

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: 169px;
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

button {

    background: rgba(255, 255, 255, 0.2);
    border: 1px solid white;
    color: white;
    padding: 20px;
    border-radius: 20px;
    font-size: 20px;
    max-width: 358px;
    width: 100%;
}
@media screen and (max-width: 480px) {
    .input {
        font-size: 16px;
        max-width: 250px;
        padding: 10px;
    }
    .button {
        font-size: 16px;
        padding: 10px;
        max-width: 250px;
    }
    h1 {
        font-size: 80px;
    }
    h2 {
        font-size: 20px;
    }
    form {
        gap: 10px;
        margin-top: 110px;

    }
}
</style>