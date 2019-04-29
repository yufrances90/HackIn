import Vue from 'vue';
import Router from 'vue-router';

import PCreate from '../pages/PCreate.vue';
import PHome from '../pages/PHome.vue';
import PLogin from '../pages/PLogin.vue';
import PHackathon from '../pages/PHackathon.vue';

import POHackathon from '../pages/organizers/POHackathon.vue';
import POApplication from '../pages/organizers/POApplication.vue';
import POProfile from '../pages/organizers/POProfile.vue';

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
        },
        {
            path: "/organizers/hackathon/:id/edit",
            name: "POHackathon",
            component: POHackathon
        },
        {
            path: "/organizers/hackathon/:id/manage",
            name: "POApplication",
            component: POApplication
        },
        {
            path: "/organizers/hackathon/:hackathonId/manage/user/:id",
            name: "POProfile",
            component: POProfile
        }
    ]
});

export default router;

