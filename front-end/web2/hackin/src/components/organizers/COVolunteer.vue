<template>
    <div>
        Hello from COVolunteer
    </div>
</template>

<script>
    export default {
        name: "COVolunteer",
        props: ["user"],
        data() {
            return {
                requiredField: []
            }
        }
    }
</script>
