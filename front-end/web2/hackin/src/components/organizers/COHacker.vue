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

            <span v-else-if="key === 'personalWebsite'">
                <MdButton 
                    class="md-icon-button"
                    @click="openLink(updatedUser[key])"
                >
                    <font-awesome-icon :icon="['fas', 'link']" />
                    <MdTooltip md-direction="left">
                        Open Personal Website
                    </MdTooltip>
                </MdButton>
            </span>

            <span v-else-if="key === '_id'">
            </span>

            <span v-else-if="key === 'isAdmitted'">
                <MdButton class="md-icon-button" :disabled="true">
                    <font-awesome-icon :icon="['fas', determineIfAdmitted? 'user-check' : 'user-times']" />
                </MdButton>
                <MdTooltip md-direction="left">
                    {{ determineIfAdmitted? "Application accepted" : "Application not yet accepted"}}
                </MdTooltip>
            </span>

            <p v-else>
                {{ updatedUser[key] }}
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
    
    import utils from '../../utils';

    export default {
        name: "COHacker",
        mixins: [userItem],
        data() {
            return {
                requiredFields: [
                    "github",
                    "linkedin",
                    "personalWebsite",
                    "isAdmitted"
                ]
            }
        }
    }
</script>

<style scoped>

    .nav-link {
        text-decoration: none !important;
        color: black !important;
    }
</style>
