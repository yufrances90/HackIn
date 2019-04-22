import Vue from 'vue';
import Router from 'vue-router';

import PCreate from '../pages/PCreate.vue';
import PHome from '../pages/PHome.vue';
import PLogin from '../pages/PLogin.vue';
import PHackathon from '../pages/PHackathon.vue';

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
        },
        {
            path: "/hackathon/:id",
            name: "PHackathon",
            component: PHackathon
        }
    ]
});

export default router;

