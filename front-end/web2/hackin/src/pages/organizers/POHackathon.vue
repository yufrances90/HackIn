<template>
    <div>
        Hello from POHackathon [ To be continued... ]
        <CAdminBtn 
            :hackathonId="hackathonId"
        />
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    import CAdminBtn from '../../components/CAdminBtn.vue';

    export default {
        name: "POHackathon",
        computed: {
            ...mapGetters(["isOrganizer", "hackathon", "hackathonId"])
        },
        components: {
            CAdminBtn
        },
        created() {
            if(!this.isOrganizer) {
                this.$router.push("/");
            }

            const { id } = this.$route.params;

            this.$store.dispatch("getHackathonById", id);
        },
        watch: {
            hackathon() {
                console.log(this.hackathon);
            }
        },
    }
</script>

<style scoped>
</style>

