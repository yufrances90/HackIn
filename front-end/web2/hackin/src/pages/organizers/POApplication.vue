<template>
    <div>
        <COUserList 
            :users="users"
            :hackathonId="hackathonId"
        />
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    import CAdminBtn from '../../components/CAdminBtn.vue';
    import COUserList from '../../components/organizers/COUserList.vue';

    export default {
        name: "POApplication",
        computed: {
            ...mapGetters(["isOrganizer", "hackathonId", "users"])
        },
        components: {
            CAdminBtn,
            COUserList
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

