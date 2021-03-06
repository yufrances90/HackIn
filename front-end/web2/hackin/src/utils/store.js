import Vue from 'vue';

import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

const debug = process.env.DEBUG || false;

const plugins = debug ? [createLogger({})] : [];

import utils from '../utils';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        hackathons: [],
        hackathon: null,
        coordinates: null,
        hackathonId: null,
        usrname: null,
        user: null,
        isOrganizer: false,
        users: [],
        isAdmitted: false,
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
        },
        setUser(state, user) {
            state.user = user;
        },
        setIsOrganizer(state, isOrganizer) {
            state.isOrganizer = isOrganizer;
        },
        setUsers(state, users) {
            state.users = users;
        },
        setIsAdmitted(state, isAdmitted) {
            state.isAdmitted = isAdmitted;
        } 
    },
    getters: {
        hackathons: state => state.hackathons,
        hackathon: state => state.hackathon,
        coordinates: state => state.coordinates,
        hackathonId: state => state.hackathonId,
        usrname: state => state.usrname,
        user: state => state.user,
        isOrganizer: state => state.isOrganizer,
        users: state => state.users,
        isAdmitted: state => state.isAdmitted
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

            context.commit("setIsOrganizer", data.usrname === context.getters.usrname);
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
        },
        async getUserByUsrname(context, usrname) {

            if(!usrname) {
                return;
            }

            try {
                
                let { data } = await utils.Client.get(`/userByUsrname?usrname=${usrname}`);
                
                context.commit("setUser", data[0]);
            } catch(err) {
                console.error(err);
            }
        },
        addNewUser(context, data) {
           
            utils.Client.post("/users", data).then(response => {
                
                const { status } = response;

                if(status === 204) {

                    console.log("Successfully created new user!");
                    
                    context.commit("setUser", data.newUser);
                }
            }).catch(err => console.error(err));
        },
        updateUser(context, data) {

            const { userId, userByHackathon, hackathonId } = data;

            utils.Client.put(`/users/${userId}`, {
                userByHackathon,
                hackathonId
            }).then(response => {
            
                const { status } = response;

                if(status === 204) {
                    console.log("Successfully submitted application");
                }
            }).catch(err => console.error(err));
        },
        async getUsersByHackathon(context, hackathonId) {

            try {

                let { data }  = 
                    await utils.Client.get(`/usersByHackathon?hackathonId=${hackathonId}`);

                context.commit("setUsers", data);
            } catch(err) {
                console.error(err);
            }
        },
        async admitUser(context, data) {

            const { userId, hackathonId } = data;

            try {

                let { status } = await utils.Client.put(
                    `/admitUser?userId=${userId}&hackathonId=${hackathonId}&acceptedStatus=${true}`
                    );

                if (status === 204) {
                    context.commit("setIsAdmitted", true);
                }
            } catch(err) {
                console.error(err);
            }
        },
        resetIsAdmitted(context) {
            context.commit("setIsAdmitted", false);
        }
    },
    plugins
})

export default store;