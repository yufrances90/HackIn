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
                console.log("Hello");
            },
            viewApplications() {
                console.log("world");
            }
        },
    }
</script>
