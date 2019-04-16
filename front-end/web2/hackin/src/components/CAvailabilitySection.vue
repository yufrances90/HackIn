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
            >
                {{ shift.name }} | {{ shift.startTime }} - {{ shift.endTime }}
                <MdButton class="md-icon-button md-accent">
                    <MdIcon>
                        delete
                    </MdIcon>
                </MdButton>
            </MdListItem>
        </MdList>

        <MdDialog :md-active.sync="showDialog">
            
            <MdDialogTitle>
                Add New Shift
            </MdDialogTitle>

            <div class="shift-container">

                <ElTimePicker
                    is-range
                    v-model="shiftTimeRange"
                    range-separator="-"
                    start-placeholder="Start time"
                    end-placeholder="End time"
                >
                </ElTimePicker>

                <MdField>
                    <label for="shift-name">
                        Task
                    </label>
                    <MdInput
                        name="shift-name"
                        id="shift-name" 
                        v-model="shiftName"
                    />
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
            shiftTimeRange: [new Date(), new Date()]
        }
    },
    props: [
        "shifts"
    ],
    methods: {
        addNewShift() {

            const startDate = this.shiftTimeRange[0];
            const endDate = this.shiftTimeRange[1];

            const startTime = startDate.getHours() + ":" + startDate.getMinutes();
            const endTime = endDate.getHours() + ":" + endDate.getMinutes();

            const newShift = {
                name: this.shiftName,
                startTime,
                endTime
            }

            utils.EventBus.$emit('addNewShift', newShift);

            this.showDialog = false;
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
</style>

