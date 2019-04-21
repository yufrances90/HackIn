import Vue from 'vue';

import Vuex from 'vuex';

import utils from '../utils';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        hackathons: []
    },
    mutations: {
        loggedIn(state) {
            state.isLoggedIn = true;
        },
        loggedOut(state) {
            state.isLoggedIn = false;
        },
        setHackathons(state, hackathons) {
            state.hackathons = hackathons;
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        hackathons: state => state.hackathons
    },
    actions: {
        async setHackathons(context) {

            let { data } = await utils.Client.get("/hackathons");

            context.commit("setHackathons", data);
        }
    }
})

export default store;