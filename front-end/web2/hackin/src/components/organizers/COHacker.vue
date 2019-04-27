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
                requiredField: [
                    "_id",
                    "firstName",
                    "lastName",
                    "age",
                    "gender",
                    "github",
                    "linkedin",
                    "personalWebsite"
                ]
            }
        }
    }
</script>
