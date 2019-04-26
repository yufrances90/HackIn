<template>
    <div>
        <Fab
            main-icon="person_outline"
            main-tooltip="Click to Manage This Hackathon"
            :actions="fabActions"
            @editHackathon="editHackathon"
            @viewApplications="viewApplications"
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
            }
        },
    }
</script>
