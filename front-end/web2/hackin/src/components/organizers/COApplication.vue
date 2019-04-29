<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-20"></div>
        <div class="md-layout-item section">
             <COUserSection 
                :users="users"
                :hackathonId="hackathonId"
            />
        </div>
        <div class="md-layout-item md-size-20"></div>
    </div>
</template>

<script>

    import COUserSection from "./COUserSection.vue";

    export default {
        name: "COApplication",
        props: ["users", "hackathonId"],
        components: {
            COUserSection
        }
    }
</script>

<style scoped>
    .section {
        max-width: 60%;
    }
</style>
