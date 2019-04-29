<template>
   
   <MdTableRow>

       <MdTableCell>
            <MdButton 
                class="md-icon-button"
                @click="admitUser(user._id)"
                :id="user._id"
            >
                <font-awesome-icon :icon="['fas', 'users-cog']" />
                <MdTooltip md-direction="right">
                    Admit User
                </MdTooltip>
            </MdButton>
        </MdTableCell>

        <MdTableCell
            v-for="key in Object.keys(updatedUser)"
            :key="key"
        >
            <span v-if="key === 'github'">
                <MdButton 
                    class="md-icon-button"
                    @click="openLink(updatedUser[key])"
                >
                    <font-awesome-icon :icon="['fab', 'github']" />
                    <MdTooltip md-direction="right">
                        Open GitHub Profile
                    </MdTooltip>
                </MdButton>
            </span>

            <span v-else-if="key === 'linkedin'">
                <MdButton 
                    class="md-icon-button md-primary"
                    @click="openLink(updatedUser[key])"
                >
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                    <MdTooltip md-direction="right">
                        Open LinkedIn Profile
                    </MdTooltip>
                </MdButton>
            </span>

            <span v-else-if="key === 'areas'">

                <ElTag
                    v-for="areaKey in updatedUser.areas"
                    type="info"
                    :key="areaKey"
                >
                    {{ getAreaByKey(areaKey) }}
                </ElTag>
            </span>

            <span v-else-if="key === '_id'">
            </span>

            <span v-else-if="key === 'isAdmitted'">
                <MdButton class="md-icon-button" :disabled="true">
                    <font-awesome-icon 
                        :icon="['fas', determineIfAdmitted? 'user-check' : 'user-times']" 
                    />
                </MdButton>
                <MdTooltip md-direction="left">
                    {{ 
                        determineIfAdmitted? 
                        "Application accepted" : 
                        "Application not yet accepted"
                    }}
                </MdTooltip>
            </span>

            <p v-else>
                {{ updatedUser[key]}}
            </p>
        </MdTableCell>

        <MdTableCell>
            <MdButton class="md-icon-button">
                <router-link
                    class="nav-link"
                    :to="`/organizers/hackathon/${hackathonId}/user/${user._id}`"
                >
                    <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
                </router-link>
                <MdTooltip md-direction="left">
                    View User
                </MdTooltip>
            </MdButton>
        </MdTableCell>
   </MdTableRow>
</template>

<script>

    import { userItem } from "../mixins/userItem";

    export default {
        name: "COMentor",
        props: ["user"],
        mixins: [userItem],
        data() {
            return {
                requiredFields: [
                    "_id",
                    "firstName",
                    "lastName",
                    "areas",
                    "github",
                    "linkedin",
                    "isAdmitted"
                ],
                areaMap: {
                    "bs": "Business&Strategy",
                    "pi": "Project Ideation",
                    "d": "Design",
                    "fed": "Front End Development",
                    "bed": "Back End Development",
                    "i": "iOS",
                    "a": "Android",
                    "ml": "Machine Learning",
                    "va": "VR/AR",
                    "b": "Blockchain",
                    "ds": "Data Science"
                }
            }
        },
        methods: {
            getAreaByKey(key) {
                return this.areaMap[key];
            }
        },
    }
</script>

<style scoped>

    .nav-link {
        text-decoration: none !important;
        color: black !important;
    }
</style>