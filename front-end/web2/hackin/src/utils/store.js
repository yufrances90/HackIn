import Vue from 'vue';

import Vuex from 'vuex';

import utils from '../utils';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        hackathons: [],
        hackathon: null
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
        },
        getHackathonById(state, hackathon) {
            state.hackathon = hackathon;
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        hackathons: state => state.hackathons,
        hackathon: state => state.hackathon
    },
    actions: {
        async setHackathons(context) {

            let { data } = await utils.Client.get("/hackathons");

            context.commit("setHackathons", data);
        },
        async getHackathonById(context, hackathonId) {

            let { data } = await utils.Client.get(`/hackathonById/${hackathonId}`);

            context.commit("getHackathonById", data);
        } 
    }
})

export default store;