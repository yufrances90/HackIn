<template>
    <MdTable 
        v-model="filteredUsers"
    >
    
        <div v-if="userType === 'hacker'">

            <COHacker 
                v-for="user in filteredUsers"
                :key="user._id" 
                :user="user"
                :hackathonId="hackathonId"
            />
        </div>

        <div v-if="userType === 'mentor'">

            <COMentor 
                v-for="user in filteredUsers"
                :key="user._id"
                :user="user"
                :hackathonId="hackathonId"
            />
        </div>

        <div v-if="userType === 'volunteer'">

            <COVolunteer 
                v-for="user in filteredUsers"
                :key="user._id"
                :user="user"
                :hackathonId="hackathonId"
            />
        </div>
    </MdTable>
</template>

<script>

    import COHacker from "./COHacker.vue";
    import COMentor from "./COMentor.vue";
    import COVolunteer from "./COVolunteer.vue";

    import utils from "../../utils";

    export default {
        name: "COUserTable",
        props: [
            "filteredUsers", 
            "userType", 
            "hackathonId"
        ],
        components: {
            COHacker,
            COMentor,
            COVolunteer
        },
        computed: {
            title() {
                return this.userType.charAt(0).toUpperCase() + this.userType.slice(1)
            }
        }
    }
</script>

<style scoped>
</style>
