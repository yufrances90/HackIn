import Vue from 'vue';
import Router from 'vue-router';

import PCreate from '../pages/PCreate.vue';
import PHome from '../pages/PHome.vue';

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
        }
    ]
});

export default router;

