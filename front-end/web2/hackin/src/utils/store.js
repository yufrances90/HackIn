import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoggedIn: false
    },
    mutations: {
        loggedIn(state) {
            state.isLoggedIn = true;
        },
        loggedOut(state) {
            state.isLoggedIn = false;
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
})

export default store;