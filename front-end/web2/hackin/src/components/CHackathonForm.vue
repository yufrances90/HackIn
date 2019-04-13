<template>
    <form class="md-layout form">
        <MdCard class="md-layout-item">
            <MdCardHeader>
                <div class="md-title">Add a New Hackathon</div>
            </MdCardHeader>
            <MdCardContent>
                <div>
                    <MdField>
                        <label for="hackathon-name">Name</label>
                        <MdInput name="hackathon-name" id="hackathon-name" />
                    </MdField>
                    <MdField>
                        <label for="hackathon-address">Address</label>
                        <MdInput name="hackathon-address" id="hackathon-address" />
                    </MdField>
                    <MdDatepicker v-model="selectedStartDate">
                        <label>Select start date</label>
                    </MdDatepicker>
                    <MdDatepicker v-model="selectedEndDate">
                        <label>Select end date</label>
                    </MdDatepicker>
                    <MdButton class="submit-btn">
                        Submit
                    </MdButton>
            </div>
                
            </MdCardContent>
        </MdCard>
    </form>
</template>

<script>

import Vue from 'vue'
import { 
    MdCard,
    MdField,
    MdDatepicker,
    MdDialog,
    MdButton
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css';

Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdDatepicker);
Vue.use(MdDialog);
Vue.use(MdButton);

export default {
    name: "CHackathonForm",
    data() {
        return {
            selectedStartDate: null,
            selectedEndDate: null
        }
    }
}
</script>

<style scoped>
</style>


