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

    import { mapGetters } from 'vuex';

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
                isNewHackathonCreation: null,
                hackathonId: null
            }
        },
        computed: {
            ...mapGetters(["usrname"])
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
                this.loginUser();
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
                    this.$store.dispatch("signupUser", data);
                });
            },
            loginUser() {
                utils.EventBus.$on("userLogin", data => {
                    this.$store.dispatch("loginUser", data);
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
            usrname() {

                setTimeout(() => {
                    this.navigate();
                }, 2500);

                const msg = (this.usrname.length === 0)? 
                    "Error: Username or password is incorrect! Please try again later!" :
                    "Login Successfully!";

                this.openSnackbar(msg);
            }
        },
    }
</script>

<style scoped>
    .form {
        margin: 5vh 3vw;
    }
</style>