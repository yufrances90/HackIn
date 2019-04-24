<template>
    <div>
        <div class="form md-layout">
            <div class="md-layout-item md-size-25">
            </div>
            <div class="md-layout-item">
                <CLoginForm 
                    v-if="!isSignUpOpt"
                />
                <CSignupForm v-else />
            </div>
            <div class="md-layout-item md-size-25">
            </div>
        </div>
        
        <CSnackbar 
            :showSnackbar="showSnackbar"
            :message="message"
        />
    </div>
</template>

<script>

import CLoginForm from "../components/CLoginForm.vue";
import CSignupForm from "../components/CSignupForm.vue";
import CSnackbar from "../components/CSnackbar.vue";

import utils from "../utils";

import { snackbar } from "../components/mixins/snackbar";

export default {
    name: "PLogin",
    mixins: [snackbar],
    data() {
        return {
            isSignUpOpt: false,
            newAccount: null,
            account: null,
            isNewHackathonCreation: null,
            hackathonId: null
        }
    },
    components: {
        CLoginForm,
        CSignupForm,
        CSnackbar
    },
    mounted() {

        const { params, query } = this.$route;

        this.isSignUpOpt = (Object.keys(params).length > 0)? params.isSignUpOpt : this.isSignUpOpt;

        if (this.isSignUpOpt) {
            this.saveNewAccount();
        } else {
            this.userLogin();
        }

        if (Object.keys(query).length > 0) {

            const { isNewHackathonCreation, hackathonId } = query;

            this.hackathonId = hackathonId;
            this.isNewHackathonCreation = isNewHackathonCreation;
        }
    },
    methods: {
        saveNewAccount() {
            utils.EventBus.$on("addNewAccount", data => {
                this.newAccount = data;
            });
        },
        userLogin() {
            utils.EventBus.$on("userLogin", data => {
                this.account = data;
            });
        },
        navigate() {

            if(this.isNewHackathonCreation === null) {
                this.$router.push("/");
            } else {
                this.$router.push({
                    path: "/create",
                    query: {
                        isNewHackathonCreation: this.isNewHackathonCreation,
                        hackathonId: this.hackathonId
                    }
                })
            }
        }
    },
    watch: {
        newAccount() {

            utils.Client.post("/accounts", this.newAccount).then(response => {

                if (response.status === 204) {

                    setTimeout(() => {

                        utils.EventBus.$emit("login");

                        this.navigate();
                    }, 2500);

                    const msg = "Successfully created new account!";

                    this.openSnackbar(msg);
                }
            });            
        },
        async account() {

            try {

                const response = 
                    await utils.Client.get(`/accountByUsrname?usrname=${this.account.usrname}`);

                if (response.status === 200) {

                    const usrAccount = response.data;

                    if (usrAccount.password === this.account.password) {

                        setTimeout(() => {

                            utils.EventBus.$emit("login");

                            this.navigate();
                        }, 2500);

                        const msg = "Login Successfully!";

                        this.openSnackbar(msg);
                    } else {

                        const msg = "Error: password is incorrect!";

                        this.openSnackbar(msg);
                    }
                } else {

                    const msg = response.data;

                    this.openSnackbar(msg);
                }
            } catch (error) {

                const msg = error;

                this.openSnackbar(msg);
            }
        }
    },
}
</script>

<style scoped>
    .form {
        margin: 5vh 3vw;
    }
</style>

