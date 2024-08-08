import {createRouter, createWebHistory} from 'vue-router';

import Login from "/src/pages/Login.vue";
import Main from "/src/pages/Main.vue"


const routes = [
    {path: '/', name: 'login', component: Login},
    {path: '/main', name:'main', component: Main}
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;