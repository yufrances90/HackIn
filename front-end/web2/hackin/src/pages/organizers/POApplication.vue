<template>
    <div>
        <COApplication 
            :users="users"
            :hackathonId="hackathonId"
        />
        <CAdminBtn 
            :hackathonId="hackathonId"
        />
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    import CAdminBtn from '../../components/CAdminBtn.vue';
    import COApplication from '../../components/organizers/COApplication.vue';

    import utils from '../../utils';

    export default {
        name: "POApplication",
        computed: {
            ...mapGetters([
                "isOrganizer", 
                "hackathonId", 
                "users",
                "isAdmitted"
            ])
        },
        components: {
            CAdminBtn,
            COApplication
        },
        beforeMount() {

            if(!this.isOrganizer) {
                this.$router.push("/");
            }

            this.$store.dispatch("getUsersByHackathon", this.hackathonId);
        },
        mounted() {
            utils.EventBus.$on("admitUser", (userId, hackathonId) => {

                setTimeout(() => {

                    if (this.isAdmitted) {

                        this.$message({
                            type: 'success',
                            message: 'Successfully accepted application!'
                        });

                        this.$store.dispatch("resetIsAdmitted");
                    }
                }, 2500);

                this.$store.dispatch("admitUser", {
                    userId, 
                    hackathonId
                });
            })
        },
    }
</script>

<style scoped>
</style>

