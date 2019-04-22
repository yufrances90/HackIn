<template>
    <CHackathonList 
        :hackathons="hackathons"
    />
</template>

<script>

    import { mapGetters } from 'vuex';

    import CHackathonList from "../components/CHackathonList.vue";

    export default {
        name: "PHome",
        mounted() {
            this.$store.dispatch("setHackathons");
        },
        computed: {
            ...mapGetters(["hackathons"])
        },
        components: {
            CHackathonList
        }
    }
</script>

<style scoped>

    .container {
        border: 1px solid red;
        margin: 4vh 3vw;
    }
</style>
