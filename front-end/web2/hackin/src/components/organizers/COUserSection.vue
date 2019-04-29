<template>
    <div class="container">

        <MdList md-expand-single>

            <MdListItem md-expand>

                <MdIcon>computer</MdIcon>

                <span class="md-list-item-text">
                    Hackers
                </span>

                <MdChip 
                    :class="existsNonAdmitted? 'md-accent' : ' md-primary'"
                >
                    {{ numNonadmittedUsers(hackers) }}
                </MdChip>

                <MdList slot="md-expand">
                     <COSection 
                        :users="hackers"
                        :hackathonId="hackathonId"
                        userType="hacker"
                    />
                </MdList>
            </MdListItem>

            <MdListItem md-expand>

                <MdIcon>book</MdIcon>

                <span class="md-list-item-text">
                    Mentors
                </span>

                <MdChip 
                    :class="existsNonAdmitted? 'md-accent' : ' md-primary'"
                >
                    {{ numNonadmittedUsers(mentors) }}
                </MdChip>

                <MdList slot="md-expand">
                    <COSection 
                        :users="mentors"
                        :hackathonId="hackathonId"
                        userType="mentor"
                    />
                </MdList>
            </MdListItem>

            <MdListItem md-expand>

                <MdIcon>face</MdIcon>

                <span class="md-list-item-text">
                    Volunteers
                </span>

                <MdChip 
                    :class="existsNonAdmitted? 'md-accent' : ' md-primary'"
                >
                    {{ numNonadmittedUsers(volunteers) }}
                </MdChip>

                <MdList slot="md-expand">
                    <COSection 
                        :users="volunteers"
                        :hackathonId="hackathonId"
                        userType="volunteer"
                    />
                </MdList>
            </MdListItem>
        </MdList>
    </div>
</template>

<script>

    import COSection from "./COSection.vue";

    export default {
        name: "COUserSection",
        props: ["hackathonId", "users"],
        computed: {
            mentors() {
                return this.users.filter(user => {
                    return user.hackathons[this.hackathonId].isMentor;
                });
            },
            volunteers() {
                return this.users.filter(user => {
                    return user.hackathons[this.hackathonId].isVolunteer;
                });
            },
            hackers() {
                return this.users.filter(user => {
                    return user.hackathons[this.hackathonId].isHacker;
                });
            },
            existsNonAdmitted() {
                return this.users.some(user => {
                    return !user.hackathons[this.hackathonId].isAdmitted;
                });
            }
        },
        components: {
            COSection
        },
        methods: {
            numNonadmittedUsers(users) {
                return users.filter(
                    user => {

                        const userByHackathon = user.hackathons[this.hackathonId];

                        return (!userByHackathon.isAdmitted && userByHackathon.isHacker)
                }).length;
            }
        },
    }
</script>

<style scoped>

    .container {
        margin: 5vh 0;
    }
</style>