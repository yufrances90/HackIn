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

    export default {
        name: "POApplication",
        computed: {
            ...mapGetters(["isOrganizer", "hackathonId", "users"])
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
        }
    }
</script>

<style scoped>
</style>

