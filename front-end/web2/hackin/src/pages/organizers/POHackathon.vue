<template>
    <div>
        Hello from POHackathon [ To be continued... ]
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: "POHackathon",
        computed: {
            ...mapGetters(["isOrganizer", "hackathon"])
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

