<template>
    <div>

        <MdList>

            <MdListItem>

                <div class="md-list-item-text">
                    <MdSubheader>
                        Available shifts
                    </MdSubheader>
                </div>

                <MdButton 
                    class="md-icon-button md-primary"
                    @click="showDialog = true"
                >
                    <MdIcon>
                        add
                    </MdIcon>
                    <MdTooltip md-direction="top">
                        Add New Shift
                    </MdTooltip>
                </MdButton>

            </MdListItem>

            <MdListItem
                v-for="shift in shifts"
                :key="shift.name"
            >
                <div class="md-list-item-text">
                    <div v-if="shift.type === 1"> 
                        <span>
                            {{ shift.name }} 
                        </span>
                        <h6>
                            Number of Volunteers Required: {{ shift.numVolunteersRequired}}
                        </h6>
                    </div>
                    <span v-else>
                        Number of Mentors Required: {{ shift.numMentorRequired }}
                    </span>
                    <p> 
                        {{ formatTime(shift.startDatetime )}} - {{ formatTime(shift.endDatetime )}}
                    </p>
                </div>


                <md-button 
                    class="md-icon-button md-list-action"
                    :disabled="true"
                >
                    <md-icon class="md-primary">
                        edit
                    </md-icon>
                    <MdTooltip md-direction="top">
                        Edit Shift
                    </MdTooltip>
                </md-button>

                <md-button 
                    class="md-icon-button md-list-action"
                    :disabled="true"
                >
                    <md-icon class="md-accent">
                        delete
                    </md-icon>
                    <MdTooltip md-direction="top">
                        Delete Shift
                    </MdTooltip>
                </md-button>
            </MdListItem>
        </MdList>

        <MdDialog :md-active.sync="showDialog">
            
            <MdDialogTitle>
                Add New Shift
            </MdDialogTitle>

            <div class="shift-container">

                <ElDatePicker
                    type="datetimerange"
                    v-model="shiftTimeRange"
                    range-separator="-"
                    start-placeholder="Start time"
                    end-placeholder="End time"
                >
                </ElDatePicker>

                <MdDivider />

                
                <MdSwitch 
                    v-model="isVolunteerShift"
                    :disabled="isMentorShift"
                >
                    Volunteer Shift?
                </MdSwitch>
                <MdSwitch 
                    v-model="isMentorShift"
                    :disabled="isVolunteerShift"
                >
                    Mentor Shift?
                </MdSwitch>

                <div v-if="isVolunteerShift">
                    <MdField>
                        <label for="shift-name">
                            Task
                        </label>
                        <MdInput
                            name="shift-name"
                            id="shift-name" 
                            v-model="shiftName"
                        />
                        <span class="md-helper-text">
                            Maximum characters allowed: {{ maxCharsAllowed }} ({{ remainNumChars }} characters left)
                        </span>
                    </MdField>
                    <MdField>
                        <label for="shift-num-volunteers-required">
                            Number of Volunteers Required
                        </label>
                        <MdInput
                            name="shift-num-volunteers-required"
                            id="shift-num-volunteers-required" 
                            v-model="shiftNumVolunteersRequired"
                            type="number"
                        />
                    </MdField>
                </div>

                <div v-if="isMentorShift">
                    <MdField>
                        <label for="shift-num-mentor-required">
                            Number of Mentors Required
                        </label>
                        <MdInput
                            name="shift-num-mentor-required"
                            id="shift-num-mentor-required" 
                            v-model="shiftNumMentorsRequired"
                            type="number"
                        />
                    </MdField>
                </div>
            </div>

            <MdDialogActions>
                <MdButton
                    class="md-primary"
                    @click="showDialog = false"
                >
                    Cancel
                </MdButton>
                <MdButton
                    class="md-accent"
                    @click="active = true"
                    :disabled="disbaleSaveBtn"
                >
                    Save
                </MdButton>
            </MdDialogActions>
        </MdDialog>

        <MdDialogConfirm
            :md-active.sync="active"
            md-title="Add new shift?"
            md-content="This shift cannot be editted or deleted after submitting!"
            md-confirm-text="Save"
            @md-confirm="addNewShift" 
        />
    </div>
</template>

<script>

    import uniqid from 'uniqid';

    import utils from '../utils';

    export default {
        name: "CAvailabilitySection",
        props: [
            "shifts",
            "startDate"
        ],
        data() {
            return {
                showDialog: false,
                shiftName: "",
                shiftTimeRange: [this.startDate, this.startDate],
                startDatetime: this.startDate,
                endDatetime: this.startDate,
                maxCharsAllowed: 40,
                shiftNumVolunteersRequired: 0,
                isVolunteerShift: false,
                isMentorShift: false,
                shiftNumMentorsRequired: 0,
                active: false
            }
        },
        computed: {
            remainNumChars() {
                return this.maxCharsAllowed - this.shiftName.length;
            },
            disbaleSaveBtn() {
                return !this.isVolunteerShift && !this.isMentorShift;
            }
        },
        watch: {
            shiftTimeRange() {
                this.startDatetime = this.shiftTimeRange[0];
                this.endDatetime = this.shiftTimeRange[1];
            },
            startDate() {
                this.shiftTimeRange = [this.startDate, this.startDate];
            }
        },
        methods: {
            addNewShift() {

                const newShift = {
                    id: uniqid(),
                    name: this.shiftName,
                    startDatetime: this.startDatetime,
                    endDatetime: this.endDatetime,
                    type: (this.isVolunteerShift)? 1 : 2,
                    numMentorRequired: this.shiftNumMentorsRequired,
                    numVolunteersRequired: this.shiftNumVolunteersRequired,
                }

                utils.EventBus.$emit('addNewShift', newShift);

                this.showDialog = false;
            },
            formatTime(datetime) {
                return datetime.toLocaleString();
            }
        }
    }
</script>

<style scoped>
    .float-btn {
        float: right;
    }

    .shift-container {
        margin: 0 1vw;
    }
</style>

