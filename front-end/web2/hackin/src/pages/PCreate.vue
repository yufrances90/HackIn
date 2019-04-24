<template>
    <div class="form md-layout">
        <div class="md-layout-item md-size-25">
        </div>
        <div class="md-layout-item">
            <CUserForm 
                v-if="!isNewHackathonCreation"
                :hackathonId="hackathonId" 
            />
            <CHackathonForm v-else />
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
                newHackathon: null,
                hackathonId: null
            }
        },
        components: {
            CHackathonForm,
            CUserForm,
            CSnackbar
        },
        beforeCreate() {

            const { isNewHackathonCreation, hackathonId } = this.$route.query;

            if (!this.$store.getters.isLoggedIn) {
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
            utils.EventBus.$on('addNewHackathon', data => {
                this.newHackathon = data;
            });

            this.setHackathonId();
        },
        watch: {
            newHackathon() {

                utils.Client.post("/hackathons", this.newHackathon)
                    .then(response => {

                        if (response.status === 204) {

                            setTimeout(() => {
                                this.$router.push("/");
                            }, 2500);

                            const msg = "Successfully created new hackathon!";

                            this.openSnackbar(msg);
                        }
                    })
            }
        },
        methods: {
            setHackathonId() {

                const { hackathonId } = this.$route.query;

                this.hackathonId = hackathonId;
            }
        },
    }
</script>

<style scoped>
    .form {
        margin: 5vh 3vw;
    }
</style>

