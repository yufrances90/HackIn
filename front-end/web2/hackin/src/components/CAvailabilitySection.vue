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
            <MdListItem>
                Hello from CAvailabilitySection
            </MdListItem>
        </MdList>

        <MdDialog :md-active.sync="showDialog">
            
            <MdDialogTitle>
                Add New Shift
            </MdDialogTitle>

            <div class="shift-container">

                <ElTimePicker
                    is-range
                    v-model="value4"
                    range-separator="-"
                    start-placeholder="Start time"
                    end-placeholder="End time"
                    step="00:30"
                >
                </ElTimePicker>

                <MdField>
                    <label for="shift-name">
                        Task
                    </label>
                    <MdInput
                        name="shift-name"
                        id="shift-name" 
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
                    @click="showDialog = false"
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

Vue.use(MdList);
Vue.use(MdButton);
Vue.use(MdTooltip);

export default {
    name: "CAvailabilitySection",
    data() {
        return {
            showDialog: false,
            value4: [new Date(1900, 9, 10, 8, 40), new Date(1900, 9, 10, 9, 40)]
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

