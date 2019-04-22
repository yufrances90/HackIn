<template>
    <div class="hackathon-container md-layout">
        <div class="md-layout-item md-size-15">
        </div>
        <div class="md-layout-item">
            <CHackathon 
                :hackathon="hackathon"
            />
        </div>
        <div class="md-layout-item md-size-15">
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    import CHackathon from '../components/CHackathon.vue';

    export default {
        name: "PHackathon",
        mounted() {

            const hackathonId = this.$route.params.id;

            this.$store.dispatch("getHackathonById", hackathonId);
        },
        computed: {
            ...mapGetters(["hackathon"])
        },
        components: {
            CHackathon
        }
    }
</script>

<style scoped>
    .hackathon-container {
        margin: 4vh 3vw;
    }
</style>

