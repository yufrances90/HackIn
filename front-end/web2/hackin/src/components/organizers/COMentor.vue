<template>
    <div>
        Hello from COMentor
    </div>
</template>

<script>
    export default {
        name: "COMentor",
        props: ["user"],
        data() {
            return {
                requiredField: [
                    "_id",
                    "firstName",
                    "lastName",
                    "areas",
                    "github",
                    "linkedin",
                    "isAdmitted"
                ]
            }
        }
    }
</script>
