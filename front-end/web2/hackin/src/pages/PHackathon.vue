<template>
    <div class="hackathon-container md-layout">
        <div class="md-layout-item md-size-15">
        </div>
        <div class="md-layout-item">
            <CHackathon 
                :hackathon="hackathon"
                :coordinates="coordinates"
                :hackathonId="hackathonId"
                :usrname="usrname"
            />
        </div>
        <div class="md-layout-item md-size-15">
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    import CHackathon from '../components/CHackathon.vue';

    import utils from '../utils';

    export default {
        name: "PHackathon",
        created() {

            const hackathonId = this.$route.params.id;

            this.$store.dispatch("getHackathonById", hackathonId);

            this.onGetCoordinates();
        },
        computed: {
            ...mapGetters([
                "hackathon", 
                "coordinates", 
                "hackathonId",
                "usrname"
            ])
        },
        components: {
            CHackathon
        },
        methods: {
            onGetCoordinates() {
                
                utils.EventBus.$on("getCoordinatesByAddress", data => {

                    const address = data;
                
                    this.$store.dispatch("getCoordiantesByAddress", address);
                });
            }
        },
    }
</script>

<style scoped>
    .hackathon-container {
        margin: 4vh 3vw;
    }
</style>

