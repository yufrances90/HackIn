<template>
    
    <div>
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
                            <label>Description</label>
                            <MdTextarea v-model="hackathonDescription"></MdTextarea>
                            <MdIcon>description</MdIcon>
                        </MdField>
                        <MdField>
                            <label for="hackathon-address">Address</label>
                            <MdInput 
                                name="hackathon-address" 
                                id="hackathon-address"
                                v-model="hackathonAddress" 
                            />
                        </MdField>
                        <MdField>
                            <label for="hackathon-logo-url">Link to Logo</label>
                            <MdInput 
                                name="hackathon-logo-url" 
                                id="hackathon-logo-url"
                                v-model="hackathonLogoUrl"
                                type="url" 
                            />
                        </MdField>
                        <MdField>
                            <label for="hackathon-bgImage-url">Link to Web Banner</label>
                            <MdInput 
                                name="hackathon-bgImage-url" 
                                id="hackathon-bgImage-url"
                                v-model="hackathonBgImageUrl"
                                type="url" 
                            />
                        </MdField>
                        <MdDatepicker v-model="hackathonStartDate">
                            <label>Select start date</label>
                        </MdDatepicker>
                        <MdDatepicker v-model="hackathonEndDate">
                            <label>Select end date</label>
                        </MdDatepicker>
                        <MdDivider> </MdDivider>
                        <CAvailabilitySection 
                            :shifts="hackathonShifts"
                            :startDate="hackathonStartDate"
                        />
                        <MdDivider> </MdDivider>
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

        <MdDialogAlert 
            :md-active.sync="showAlert"
            md-title="Error"
            md-content="End date can not be before start date!"
            md-confirm-text="Retry"
        />
    </div>
</template>

<script>

import CAvailabilitySection from './CAvailabilitySection.vue';

import utils from '../utils';

export default {
    name: "CHackathonForm",
    props: ["usrname"],
    data() {
        return {
            hackathonName: "",
            hackathonAddress: "",
            hackathonStartDate: new Date(),
            hackathonEndDate: new Date(),
            hackathonShifts: [],
            hackathonLogoUrl: "",
            showAlert: false,
            hackathonBgImageUrl: "",
            hackathonDescription: ""
        }
    },
    components: {
        CAvailabilitySection
    },
    mounted() {
        utils.EventBus.$on('addNewShift', data => {
            this.hackathonShifts.push(data);
        });
    },
    methods: {
        addNewHackathon() {

            const newHackathon = {
                name: this.hackathonName,
                address: this.hackathonAddress,
                startDate: this.hackathonStartDate,
                endDate: this.hackathonEndDate,
                shifts: this.hackathonShifts,
                logoUrl: this.hackathonLogoUrl,
                bgImgUrl: this.hackathonBgImageUrl,
                description: this.hackathonDescription,
                usrname: this.usrname
            }

            utils.EventBus.$emit('addNewHackathon', newHackathon);
        },
        compareDates() {
            if (this.hackathonStartDate > this.hackathonEndDate) {
                this.showAlert = true;
            }
        }
    },
    watch: {
        hackathonEndDate() {
           this.compareDates();
        },
        hackathonStartDate() {
            this.compareDates();
        }
    }
   
}
</script>

<style scoped>
</style>


