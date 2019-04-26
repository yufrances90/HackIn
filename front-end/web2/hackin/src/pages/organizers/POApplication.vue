<template>
    <div>
        Hello from POApplication
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    import CAdminBtn from '../../components/CAdminBtn.vue';

    export default {
        name: "POApplication",
        computed: {
            ...mapGetters(["isOrganizer"])
        },
        components: {
            CAdminBtn
        },
        beforeMount() {
            if(!this.isOrganizer) {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
</style>

