<template>
    <div class="form md-layout">
        <div class="md-layout-item md-size-25">
        </div>
        <div class="md-layout-item">
            <CUserForm 
                v-if="!isNewHackathonCreation"
                :hackathonId="hackathonId"
                :usrname="usrname" 
                :user="user"
                :hackathon="hackathon"
            />
            <CHackathonForm 
                v-else
                :usrname="usrname" 
            />
            <CSnackbar 
                :showSnackbar="showSnackbar"
                :message="message"
            />
        </div>
        <div class="md-layout-item md-size-25">
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    import CHackathonForm from '../components/CHackathonForm.vue';
    import CUserForm from '../components/CUserForm.vue';
    import CSnackbar from '../components/CSnackbar.vue';

    import utils from '../utils';

    import { snackbar } from '../components/mixins/snackbar';

    export default {
        name: "PCreate",
        mixins: [snackbar],
        data() {
            return {
                isNewHackathonCreation: 
                    (Object.keys(this.$route.params).length > 0)? 
                    this.$route.params.isNewHackathonCreation : false,
                hackathonId: null
            }
        },
        components: {
            CHackathonForm,
            CUserForm,
            CSnackbar
        },
        computed: {
            ...mapGetters([
                "usrname", 
                "hackathon", 
                "user"
            ])
        },
        created() {

            const { isNewHackathonCreation, hackathonId } = this.$route.query;

            if (!this.usrname || this.usrname.length === 0) {
                this.$router.push({
                    path: "/login",
                    query: {
                        isNewHackathonCreation,
                        hackathonId
                    }
                });
            }
        },
        mounted() {
            
            this.onAddNewHackathon();

            this.onGetUserByUsrname();

            this.onAddNewUser();

            this.onUpdateUser();

            this.setHackathonId();
        },
        watch: {
            hackathon() {

                setTimeout(() => {
                    this.$router.push("/");
                }, 2500);

                const msg = "Successfully created new hackathon!";

                this.openSnackbar(msg);
            }
        },
        methods: {
            onAddNewHackathon() {
                utils.EventBus.$on('addNewHackathon', data => {
                    this.$store.dispatch("addNewHackathon", data);
                });
            },
            onGetUserByUsrname() {
                utils.EventBus.$on('getUserByUsrname', data => {
                    this.$store.dispatch("getUserByUsrname", data);
                });
            },
            onAddNewUser() {
                utils.EventBus.$on('addNewUser', (newUser, hackathonId) => {

                    this.$store.dispatch("addNewUser", {
                        newUser, 
                        hackathonId
                    });

                    this.displaySnackbarAfterSubmitted();
                });
            },
            onUpdateUser() {
                
                utils.EventBus.$on(
                    'updateUser', 
                    (user, userByHackathon, hackathonId) => {
                    
                    this.$store.dispatch("updateUser", {
                        userId: user._id, 
                        userByHackathon, 
                        hackathonId
                    });

                    this.displaySnackbarAfterSubmitted();
                });
            },
            setHackathonId() {

                const { hackathonId } = this.$route.query;

                this.hackathonId = hackathonId;
            },
            displaySnackbarAfterSubmitted() {

                setTimeout(() => {
                    this.$router.go(-1);
                }, 2500);

                const msg = "Successfully submitted application!";

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

