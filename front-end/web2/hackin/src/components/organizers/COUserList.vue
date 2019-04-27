<template>
    <div class="container">

        <MdList md-expand-single>

            <MdListItem md-expand>

                <MdIcon>computer</MdIcon>

                <span class="md-list-item-text">
                    Hackers
                </span>

                <MdChip class="md-primary">
                    {{ hackers.length }}
                </MdChip>

                <MdList slot="md-expand">
                     <COHackerSection 
                        :users="hackers"
                        userType="hacker"
                    />
                </MdList>
            </MdListItem>

            <MdListItem md-expand>

                <MdIcon>book</MdIcon>

                <span class="md-list-item-text">
                    Mentors
                </span>

                <MdChip class="md-primary">
                    {{ mentors.length }}
                </MdChip>

                <MdList slot="md-expand">
                    <COMentorSection 
                        :users="mentors"
                        userType="mentor"
                    />
                </MdList>
            </MdListItem>

            <MdListItem md-expand>

                <MdIcon>face</MdIcon>

                <span class="md-list-item-text">
                    Volunteers
                </span>

                <MdChip class="md-primary">
                    {{ volunteers.length }}
                </MdChip>

                <MdList slot="md-expand">
                    <COVolunteerSection 
                        :users="volunteers"
                        userType="volunteer"
                    />
                </MdList>
            </MdListItem>
        </MdList>

       
        
    </div>
</template>

<script>

    import COHackerSection from "./COHackerSection.vue";
    import COVolunteerSection from "./COVolunteerSection.vue";
    import COMentorSection from "./COMentorSection.vue";

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
        components: {
            COHackerSection,
            COVolunteerSection,
            COMentorSection
        }
    }
</script>

<style scoped>

    .container {
        margin: 5vh 0;
    }
</style>