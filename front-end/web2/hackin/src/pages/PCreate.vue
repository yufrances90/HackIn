<template>
    <div class="form md-layout">
        <div class="md-layout-item md-size-25">
        </div>
        <div class="md-layout-item">
            <CHackathonForm />
        </div>
        <div class="md-layout-item md-size-25">
        </div>
    </div>
</template>

<script>

    import 'vue-material/dist/vue-material.min.css';

    import CHackathonForm from '../components/CHackathonForm.vue';

    export default {
        name: "PCreate",
        components: {
            CHackathonForm
        }
    }
</script>

<style scoped>
    .form {
        margin: 5vh 3vw;
    }
</style>

