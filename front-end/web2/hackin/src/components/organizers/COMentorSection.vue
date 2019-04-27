<template>
    <div>
        Hello from COMentorSection {{ users.length }} - {{ userType }}
    </div>
</template>

<script>
    export default {
        name: "COMentorSection",
        props: ["users", "userType"]
    }
</script>

<style scoped>
</style>