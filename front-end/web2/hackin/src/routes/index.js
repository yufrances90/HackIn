import Vue from 'vue';
import Router from 'vue-router';

import PCreate from '../pages/PCreate.vue';
import PHome from '../pages/PHome.vue';
import PLogin from '../pages/PLogin.vue';

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "PHome",
            component: PHome
        },
        {
            path: "/create",
            name: "PCreate",
            component: PCreate
        },
        {
            path: "/login",
            name: "PLogin",
            component: PLogin
        }
    ]
});

export default router;

