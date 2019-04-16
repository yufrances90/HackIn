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
        
        <MdSnackbar
            :md-position="snackbar.position" 
            :md-duration="snackbar.isInfinity ? Infinity : snackbar.duration" 
            :md-active.sync="snackbar.showSnackbar" 
            md-persistent
        >
            <span>
                {{ msg }}
            </span>
            <MdButton 
                class="md-primary" 
                @click="snackbar.showSnackbar = false"
            >
                Close
            </MdButton>
        </MdSnackbar>
    </div>
</template>

<script>

import CLoginForm from "../components/CLoginForm.vue";
import CSignupForm from "../components/CSignupForm.vue";

import utils from '../utils';

export default {
    name: "PLogin",
    data() {
        return {
            isSignUpOpt: false,
            msg: "",
            snackbar: {
                showSnackbar: false,
                position: 'center',
                duration: 4000,
                isInfinity: false
            },
            newAccount: null,
            account: null
        }
    },
    components: {
        CLoginForm,
        CSignupForm
    },
    mounted() {

        const { params } = this.$route;

        this.isSignUpOpt = (Object.keys(params).length > 0)? params.isSignUpOpt : this.isSignUpOpt;

        if (this.isSignUpOpt) {
            this.saveNewAccount();
        } else {
            this.userLogin();
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
        }
    },
    watch: {
        newAccount() {

            utils.Client.post("/accounts", this.newAccount).then(response => {

                if (response.status === 204) {

                    setTimeout(() => {

                        utils.EventBus.$emit("login");

                        this.$router.push("/");
                    }, 2500);

                    this.msg = "Successfully created new account!";

                    this.snackbar.showSnackbar = true;
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

                            this.$router.push("/");
                        }, 2500);

                        this.msg = "Login Successfully!";

                        this.snackbar.showSnackbar = true;
                    } else {

                        this.msg = "Error: password is incorrect!";

                        this.snackbar.showSnackbar = true;
                    }
                } else {

                    this.msg = response.data;

                    this.snackbar.showSnackbar = true;
                }
            } catch (error) {

                this.msg = error;

                this.snackbar.showSnackbar = true;
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

