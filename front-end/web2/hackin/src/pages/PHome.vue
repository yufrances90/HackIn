<template>
    <div>
        Hello from PHome {{ hackathons.length }}
    </div>
</template>

<script>
export default {
    name: "PHome",
    beforeCreate() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("/login");
        }
    },
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
