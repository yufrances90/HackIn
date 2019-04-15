<template>
    <div class="form md-layout">
        <div class="md-layout-item md-size-25">
        </div>
        <div class="md-layout-item">
            <CUserForm v-if="!isNewHackathonCreation" />
            <CHackathonForm v-else />
        </div>
        <div class="md-layout-item md-size-25">
        </div>
    </div>
</template>

<script>

    import 'vue-material/dist/vue-material.min.css';

    import CHackathonForm from '../components/CHackathonForm.vue';
    import CUserForm from '../components/CUserForm.vue';

    export default {
        name: "PCreate",
        data() {
            return {
                isNewHackathonCreation: (Object.keys(this.$route.params).length > 0)? this.$route.params.isNewHackathonCreation : false
            }
        },
        components: {
            CHackathonForm,
            CUserForm
        }
    }
</script>

<style scoped>
    .form {
        margin: 5vh 3vw;
    }
</style>

