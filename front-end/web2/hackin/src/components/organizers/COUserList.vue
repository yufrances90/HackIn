<template>
    <MdList>
        <MdListItem 
            v-for="user in filteredUsers"
            :key="user._id"
        >
            <COHacker 
                :user="user"
                :hackathonId="hackathonId"
                v-if="userType === 'hacker'"
            />

            <COMentor 
                :user="user"
                :hackathonId="hackathonId"
                v-else-if="userType === 'mentor'"
            />

            <COVolunteer 
                :user="user"
                :hackathonId="hackathonId"
                v-if="userType === 'volunteer'"
            />
        </MdListItem>
    </MdList>
</template>

<script>

    import COHacker from "./COHacker.vue";
    import COMentor from "./COMentor.vue";
    import COVolunteer from "./COVolunteer.vue";

    export default {
        name: "COUserList",
        props: ["filteredUsers", "userType", "hackathonId"],
        components: {
            COHacker,
            COMentor,
            COVolunteer
        }
    }
</script>

<style scoped>
</style>
