<template>
    <div>
        <MdCheckbox
            v-for="shift in filteredShiftList"
            :key="shift.id"
            :value="shift.id"
            v-model="availabilities"
        >
            {{ timeString(shift) }}
        </MdCheckbox>
    </div>
</template>

<script>

    import { userForm } from "./mixins/userForm";

    export default {
        name: "CUFCheckbox",
        props: ["shifts", "userType"],
        mixins: [userForm],
        data() {
            return {
                filteredShiftList: [],
                availabilities: []
            }
        },
        watch: {
            userType() {

                const typeToBeFiltered = (this.userType === "volunteer")? 1 : 2;
                
                this.filteredShiftList = this.shifts.filter(shift => {
                    return shift.type === typeToBeFiltered
                });
            }
        },
        methods: {
            timeString(shift) {

                const startTimeStr = shift.startDatetime;
                const endTimeStr = shift.endDatetime;
                
                const startTime = new Date(startTimeStr);
                const endTime = new Date(endTimeStr);

                return `${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}`;
            }
        },
    }
</script>

<style scoped>
</style>

