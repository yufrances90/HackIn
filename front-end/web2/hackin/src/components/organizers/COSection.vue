<template>
    <div class="section">

        <div v-if="!showPagination">
            No matched record is found!
        </div>

        <div v-else>

            <COUserList 
                :filteredUsers="filteredUsers"
                :userType="userType"
                :hackathonId="hackathonId" 
            />

            <COPagination :users="users" />
        </div>
    </div>
</template>

<script>

    import COPagination from "./COPagination.vue";
    import COUserList from "./COUserList.vue";

    import { pagination } from "../mixins/pagination";

    export default {
        name: "COSection",
        mixins: [pagination],
        props: ["userType", "hackathonId"],
        components: {
            COPagination,
            COUserList
        }
    }
</script>

<style scoped>
    .section {
        margin: 3vh 3vw;
    }
</style>