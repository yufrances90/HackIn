<template>
    <div>
        Hello from PHome {{ hackathons.length }}
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: "PHome",
        mounted() {
            this.$store.dispatch("setHackathons");
        },
        computed: {
            ...mapGetters(["hackathons"])
        },
    }
</script>

<style scoped>
</style>
