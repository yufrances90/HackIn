<template>
    <div> 
        <Fab 
            main-icon="menu"
            main-tooltip="Apply as Hacker, Volunteer or Mentor"
            :actions="fabActions"
            @apply="apply"
        />
    </div>
</template>

<script>

    import Fab from 'vue-fab';

    export default {
        name: "CFloatBtns",
        components: {
            Fab
        },
        props: [
            "hackathonId"
        ],
        data() {
            return {
                fabActions: [
                    {
                        name: 'apply',
                        icon: 'send',
                        tooltip: "Apply as Hacker, Volunteer or Mentor"
                    },
                ]
            }
        },
        methods: {
            apply() {
                this.$router.push({
                    path: "/create",
                    query: {
                        isNewHackathonCreation: false,
                        hackathonId: this.hackathonId
                    }
                });
            }
        },
    }
</script>
