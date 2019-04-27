<template>
    <div>
        Hello from COHacker - {{ hackathonId }}
    </div>
</template>

<script>
    export default {
        name: "COHacker",
        props: ["user", "hackathonId"],
        data() {
            return {
                requiredField: []
            }
        }
    }
</script>
