<template>
    <div>
        Hello from COVolunteerSection {{ users.length }} - {{ userType }}
    </div>
</template>

<script>
    export default {
        name: "COVolunteerSection",
        props: ["users", "userType"]
    }
</script>

<style scoped>
</style>