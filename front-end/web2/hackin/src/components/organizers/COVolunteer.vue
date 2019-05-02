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

            <p v-if="key==='_id'">
            </p>

            <span v-else-if="key === 'isAdmitted'">
                <MdButton class="md-icon-button" :disabled="true">
                    <font-awesome-icon :icon="['fas', determineIfAdmitted? 'user-check' : 'user-times']" />
                </MdButton>
                <MdTooltip md-direction="left">
                    {{ determineIfAdmitted? "Application accepted" : "Application not yet accepted"}}
                </MdTooltip>
            </span>

            <span v-else-if="key === 'faculty'">
                <ElTag type="success">
                    {{ updatedUser[key] }}
                </ElTag>
            </span>

            <p v-else>
                {{ updatedUser[key] }}
            </p>
        </MdTableCell>
    </MdTableRow>
</template>

<script>

    import { userItem } from "../mixins/userItem";

    export default {
        name: "COVolunteer",
        mixins: [userItem],
        data() {
            return {
                requiredFields: [
                    "faculty",
                    "isAdmitted"
                ]
            }
        }
    }
</script>
