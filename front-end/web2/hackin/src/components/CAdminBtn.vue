<template>
    <div>
        <Fab
            main-icon="person_outline"
            main-tooltip="Click to Manage This Hackathon"
            :actions="fabActions"
            @editHackathon="editHackathon"
            @viewApplications="viewApplications"
            @return="goToHackathonDetails"
            @home="goToHome"
        />
    </div>
</template>

<script>

    import Fab from 'vue-fab';

    export default {
        name: "CAdminBtn",
        props: ["hackathonId"],
        components: {
            Fab
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "editHackathon",
                        icon: "edit",
                        tooltip: "Edit Hackathon Details"
                    },
                    {
                        name: "viewApplications",
                        icon: "people",
                        tooltip: "View Applications"
                    },
                    {
                        name: "return",
                        icon: "replay",
                        tooltip: "Return to Hackathon Details"
                    },
                    {
                        name: "home",
                        icon: "home",
                        tooltip: "Go to Home"
                    }
                ]
            }
        },
        methods: {
            editHackathon() {
                this.$router.push(`/organizers/hackathon/${this.hackathonId}/edit`);
            },
            viewApplications() {
                this.$router.push(`/organizers/hackathon/${this.hackathonId}/manage`);
            },
            goToHackathonDetails() {
                this.$router.push(`/hackathon/${this.hackathonId}`);
            },
            goToHome() {
                this.$router.push("/");
            }
        },
    }
</script>
