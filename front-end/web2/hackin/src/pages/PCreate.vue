<template>
    <div class="form md-layout">
        <div class="md-layout-item md-size-25">
        </div>
        <div class="md-layout-item">
            <CUserForm 
                v-if="!isNewHackathonCreation"
                :hackathonId="hackathonId" 
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
            ...mapGetters(["usrname", "hackathon"])
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
            utils.EventBus.$on('addNewHackathon', data => {
                this.$store.dispatch("addNewHackathon", data);
            });

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

