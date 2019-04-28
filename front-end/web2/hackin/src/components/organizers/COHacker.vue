<template>
    
    <MdTableRow>
        <MdTableCell
            v-for="key in Object.keys(updatedUser)"
            :key="key"
        >

            <span v-if="key === 'github'">
                <MdButton class="md-icon-button">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </MdButton>
            </span>

            <span v-else-if="key === 'linkedin'">
                <MdButton class="md-icon-button">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                </MdButton>
            </span>

            <span v-else-if="key === 'personalWebsite'">
                <MdButton class="md-icon-button">
                    <font-awesome-icon :icon="['fas', 'link']" />
                </MdButton>
            </span>

            <span v-else-if="key === '_id'">
            </span>

            <p v-else>
                {{ updatedUser[key] }}
            </p>
        </MdTableCell>

        <MdTableCell>
            <span>
                <MdButton class="md-icon-button">
                    <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
                </MdButton>
            </span>
        </MdTableCell>
    </MdTableRow>
</template>

<script>

    import { userItem } from "../mixins/userItem";

    export default {
        name: "COHacker",
        mixins: [userItem],
        data() {
            return {
                requiredFields: [
                    "github",
                    "linkedin",
                    "personalWebsite"
                ]
            }
        }
    }
</script>

<style scoped>

    .card {
        width: inherit;
    }
</style>
