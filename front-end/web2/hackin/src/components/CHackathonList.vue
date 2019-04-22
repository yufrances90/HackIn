<template>
    <div 
        class="md-layout md-gutter container"
    >
        <div 
            class="md-layout-item md-size-25"
            v-for="hackathon in hackathons"
            :key="hackathon._id"
        >
            <CHackathonItem 
                :hackathon="hackathon"
            />
        </div>
    </div>
</template>

<script>

    import CHackathonItem from "./CHackathonItem.vue";

    export default {
        name: "CHackathonList",
        props: ["hackathons"],
        components: {
            CHackathonItem
        }
    }
</script>

<style scoped>

</style>

