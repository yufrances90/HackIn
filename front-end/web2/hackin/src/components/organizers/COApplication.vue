<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-20"></div>
        <div class="md-layout-item">
             <COUserList 
                :users="users"
                :hackathonId="hackathonId"
            />
        </div>
        <div class="md-layout-item md-size-20"></div>
    </div>
</template>

<script>

    import COUserList from "./COUserList.vue";

    export default {
        name: "COApplication",
        props: ["users", "hackathonId"],
        components: {
            COUserList
        }
    }
</script>

<style scoped>
</style>
