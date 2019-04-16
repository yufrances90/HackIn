<template>
    <div>

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

        <MdList>
            <MdListItem
                v-for="shift in shifts"
                :key="shift.name"
                class="flex-item"
            >
                <div class="md-list-item-text">
                    <span> {{ shift.name }}</span>
                    <p> 
                        {{ formatTime(shift.startDatetime )}} - {{ formatTime(shift.endDatetime )}}
                    </p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-accent">
                        delete
                    </md-icon>
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
                    @click="addNewShift"
                    :disabled="disbaleSaveBtn"
                >
                    Save
                </MdButton>
            </MdDialogActions>
        </MdDialog>
    </div>
</template>

<script>

import Vue from 'vue'
import { 
    MdList,
    MdButton,
    MdTooltip
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css';

import utils from '../utils';

Vue.use(MdList);
Vue.use(MdButton);
Vue.use(MdTooltip);

export default {
    name: "CAvailabilitySection",
    data() {
        return {
            showDialog: false,
            shiftName: "",
            shiftTimeRange: [new Date(), new Date()],
            startDatetime: new Date(),
            endDatetime: new Date(),
            disbaleSaveBtn: true,
            maxCharsAllowed: 40
        }
    },
    computed: {
        remainNumChars() {
            return this.maxCharsAllowed - this.shiftName.length;
        }
    },
    watch: {
        shiftTimeRange() {

            this.startDatetime = this.shiftTimeRange[0];
            this.endDatetime = this.shiftTimeRange[1];
        },
        shiftName() {

            if (this.shiftName <= 0 || this.shiftName.length > this.maxCharsAllowed) {
                this.disbaleSaveBtn = true;
            } else {
                this.disbaleSaveBtn = false;
            }
        }
    },
    props: [
        "shifts"
    ],
    methods: {
        addNewShift() {

            const newShift = {
                name: this.shiftName,
                startDatetime: this.startDatetime,
                endDatetime: this.endDatetime
            }

            utils.EventBus.$emit('addNewShift', newShift);

            this.showDialog = false;
        },
        formatTime(datetime) {
            return datetime.toLocaleTimeString();
        }
    },
}
</script>

<style scoped>
    .float-btn {
        float: right;
    }

    .shift-container {
        margin: 0 1vw;
    }

    .flex-item {
        display: flex;
        flex-direction: column;
    }
</style>

