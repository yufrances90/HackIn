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
        </div>
        <div class="md-layout-item md-size-25">
        </div>
    </div>
</template>

<script>

    import CHackathonForm from '../components/CHackathonForm.vue';
    import CUserForm from '../components/CUserForm.vue';

    import utils from '../utils';

    export default {
        name: "PCreate",
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
            CUserForm
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
                            alert("Successfully created new hackathon!");
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

