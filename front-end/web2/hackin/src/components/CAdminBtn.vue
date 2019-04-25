<template>
    <div>
        <Fab
            main-icon="person_outline"
            main-tooltip="Click to Access Admin Panel"
            :actions="fabActions"
            @admin="admin"
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
                        name: "admin",
                        icon: "dashboard",
                        tooltip: "Click to Access Admin Panel"
                    }
                ]
            }
        },
        methods: {
            admin() {
                console.log("Hello World!");
            }
        },
    }
</script>
