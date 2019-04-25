import Vue from 'vue';

import Vuex from 'vuex';

import utils from '../utils';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        hackathons: [],
        hackathon: null,
        coordinates: null,
        hackathonId: null,
        usrname: null
    },
    mutations: {
        setHackathons(state, hackathons) {
            state.hackathons = hackathons;
        },
        setHackathon(state, hackathon) {
            state.hackathon = hackathon;
        },
        setCoordiantes(state, coordinates) {
            state.coordinates = coordinates;
        },
        setHackathonId(state, hackathonId) {
            state.hackathonId = hackathonId;
        },
        setUsrname(state, usrname) {
            state.usrname = usrname;
        },
        logout(state) {
            state.usrname = null;
        }
    },
    getters: {
        hackathons: state => state.hackathons,
        hackathon: state => state.hackathon,
        coordinates: state => state.coordinates,
        hackathonId: state => state.hackathonId,
        usrname: state => state.usrname
    },
    actions: {
        async setHackathons(context) {

            let { data } = await utils.Client.get("/hackathons");

            context.commit("setHackathons", data);
        },
        async getHackathonById(context, hackathonId) {

            let { data } = await utils.Client.get(`/hackathonById/${hackathonId}`);

            context.commit("setHackathon", data);
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
        },
        async loginUser(context, account) {

            if (!account) {
                return;
            }

            try {

                let { data } = await utils.Client.get(`/accountByUsrname?usrname=${account.usrname}`);

                const { password, usrname } = data;

                if(account.password === password) {
                    context.commit("setUsrname", usrname);
                } else {
                    context.commit("setUsrname", "");
                }
            } catch(err) {

                console.error(err);

                context.commit("setUsrname", "");
            }
        },
        async signupUser(context, newAccount) {

            if(!newAccount) {
                return;
            }

            try {

                let { status }  = await utils.Client.post("/accounts", newAccount);

                if (status === 204) {
                    context.commit("setUsrname", newAccount.usrname);
                } else {
                    context.commit("setUsrname", "");
                }
            } catch(err) {

                console.error(err);

                context.commit("setUsrname", "");
            }
        },
        async addNewHackathon(context, newHackathon) {

            if(!newHackathon) {
                return;
            }

            try {

                let { status } = await utils.Client.post("/hackathons", newHackathon);

                if (status === 204) {
                    context.commit("setHackathon", newHackathon);
                }
            } catch(err) {

                console.error(err);
            }
        }
    }
})

export default store;