<template>
    <div>
        Hello from CAUserList {{ hackathonId }} 
        Number of Mentors: {{ mentors.length }}
        Number of Hackers: {{ hackers.length }}
        Number of Volunteers: {{ volunteers.length }}
    </div>
</template>

<script>
    export default {
        name: "COUserList",
        props: ["hackathonId", "users"],
        computed: {
            mentors() {
                return this.users.filter(user => {
                    return user.hackathons[this.hackathonId].isMentor === true
                });
            },
            volunteers() {
                return this.users.filter(user => {
                    return user.hackathons[this.hackathonId].isVolunteer === true
                });
            },
            hackers() {
                return this.users.filter(user => {
                    return user.hackathons[this.hackathonId].isHacker === true
                });
            }
        },
    }
</script>

<style scoped>
</style>