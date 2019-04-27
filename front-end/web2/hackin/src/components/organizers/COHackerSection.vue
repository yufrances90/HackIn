<template>
    <div>
        Hello from COHackerSection {{ users.length }} - {{ userType }}
    </div>
</template>

<script>
    export default {
        name: "COHackerSection",
        props: ["users", "userType"]
    }
</script>

<style scoped>
</style>
