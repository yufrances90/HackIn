<template>
    <div>
        Hello from PHome {{ hackathons.length }}
    </div>
</template>

<script>
export default {
    name: "PHome",
    mounted() {
        this.$store.dispatch("setHackathons");
    },
    computed: {
        hackathons() {
            return this.$store.getters.hackathons;
        }
    },
}
</script>

<style scoped>
</style>
