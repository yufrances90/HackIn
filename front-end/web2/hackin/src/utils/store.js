import Vue from 'vue';

import Vuex from 'vuex';

import utils from '../utils';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        hackathons: [],
        hackathon: null,
        coordinates: null,
        hackathonId: null
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
        },
        setCoordiantes(state, coordinates) {
            state.coordinates = coordinates;
        },
        setHackathonId(state, hackathonId) {
            state.hackathonId = hackathonId;
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        hackathons: state => state.hackathons,
        hackathon: state => state.hackathon,
        coordinates: state => state.coordinates,
        hackathonId: state => state.hackathonId
    },
    actions: {
        async setHackathons(context) {

            let { data } = await utils.Client.get("/hackathons");

            context.commit("setHackathons", data);
        },
        async getHackathonById(context, hackathonId) {

            let { data } = await utils.Client.get(`/hackathonById/${hackathonId}`);

            context.commit("getHackathonById", data);
            context.commit("setHackathonId", hackathonId);
        },
        async getCoordiantesByAddress(context, address) {

            if (!address || address.length === 0 || address === "Online") {
                return null;
            }

            try {

                let { data } = await utils.Client.get(`/coordinatesByAddress?address=${address}`);

                if (data) {

                    const { results } = data;

                    if (results.length > 0) {

                        const res = results[0];

                        const { lat, lng } = res.geometry.location;

                        const coords = {
                            lat,
                            lng
                        };

                        context.commit("setCoordiantes", coords);
                    }
                }

                
            } catch(err) {
                console.error(err)
            }
        } 
    }
})

export default store;