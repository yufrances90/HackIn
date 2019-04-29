<template>
    <div class="section">

        <COUserTable 
            :filteredUsers="filteredUsers"
            :userType="userType"
            :hackathonId="hackathonId"
        />

        <COPagination 
            :users="users"
            v-show="showPagination" 
        />
        
    </div>
</template>

<script>

    import COPagination from "./COPagination.vue";
    import COUserTable from "./COUserTable.vue";

    import { pagination } from "../mixins/pagination";

    import utils from "../../utils";

    export default {
        name: "COSection",
        mixins: [pagination],
        props: ["userType", "hackathonId"],
        components: {
            COPagination,
            COUserTable
        }
    }
</script>

<style scoped>
    .section {
        margin: 3vh 3vw;
    }
</style>