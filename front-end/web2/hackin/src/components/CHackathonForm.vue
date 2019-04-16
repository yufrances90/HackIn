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
                        <MdInput 
                            name="hackathon-name" 
                            id="hackathon-name"
                            v-model="hackathonName" 
                        />
                    </MdField>
                    <MdField>
                        <label for="hackathon-address">Address</label>
                        <MdInput 
                            name="hackathon-address" 
                            id="hackathon-address"
                            v-model="hackathonAddress" 
                        />
                    </MdField>
                    <MdDatepicker v-model="hackathonStartDate">
                        <label>Select start date</label>
                    </MdDatepicker>
                    <MdDatepicker v-model="hackathonEndDate">
                        <label>Select end date</label>
                    </MdDatepicker>
                    <hr>
                        <CAvailabilitySection />
                    <hr>
                    <MdButton 
                        class="submit-btn"
                        @click="addNewHackathon"
                    >
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

import CAvailabilitySection from './CAvailabilitySection.vue';

import utils from '../utils';

Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdDatepicker);
Vue.use(MdDialog);
Vue.use(MdButton);

export default {
    name: "CHackathonForm",
    data() {
        return {
            hackathonName: "",
            hackathonAddress: "",
            hackathonStartDate: null,
            hackathonEndDate: null
        }
    },
    components: {
        CAvailabilitySection
    },
    methods: {
        addNewHackathon() {

            const newHackathon = {
                name: this.hackathonName,
                address: this.hackathonAddress,
                startDate: this.hackathonStartDate,
                endDate: this.hackathonEndDate
            }

            utils.EventBus.$emit('addNewHackathon', newHackathon);
        }
    },
}
</script>

<style scoped>
</style>


