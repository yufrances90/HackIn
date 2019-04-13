<template>
    <form class="md-layout form">
        <MdCard class="md-layout-item">
            <MdCardHeader>
                <div class="md-title">
                    Apply to a Hackathon
                </div>
            </MdCardHeader>
            <MdCardContent>
                <div>
                    <MdField>
                        <label for="first-name">First Name</label>
                        <MdInput name="first-name" id="first-name" />
                    </MdField>
                    <MdField>
                        <label for="last-name">Last Name</label>
                        <MdInput name="last-name" id="last-name" />
                    </MdField>
                    <MdField>
                        <label for="phone-number">Phone Number</label>
                        <MdInput name="phone-number" id="phone-number" />
                    </MdField>
                    <MdField>
                        <label for="email">Email Address</label>
                        <MdInput name="email" id="email" />
                    </MdField>

                    <MdRadio v-model="userType" value="hacker">
                        Hacker
                    </MdRadio>
                    <MdRadio v-model="userType" value="volunteer">
                        Volunteer
                    </MdRadio>
                    <MdRadio v-model="userType" value="mentor">
                        Mentor
                    </MdRadio>
                    <hr>
                        <CHackerSection 
                            v-show="userType === 'hacker'" 
                        />
                        <CMentorSection 
                            v-show="userType === 'mentor'" 
                        />
                        <CVolunteerSection 
                             v-show="userType === 'volunteer'" 
                        />
                    <hr
                        v-show="userType" 
                    >

                    <MdButton 
                        class="submit-btn"
                        v-show="userType" 
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
        MdButton,
        MdCheckbox,
        MdRadio
    } from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css';

    import CMentorSection from './CMentorSection.vue';
    import CHackerSection from './CHackerSection.vue';
    import CVolunteerSection from './CVolunteerSection.vue';

    Vue.use(MdCard);
    Vue.use(MdField);
    Vue.use(MdDatepicker);
    Vue.use(MdDialog);
    Vue.use(MdButton);
    Vue.use(MdCheckbox);
    Vue.use(MdRadio);

    export default {
        name: "CUserForm",
        data() {
            return {
                userType: null
            }
        },
        components: {
            CMentorSection,
            CHackerSection,
            CVolunteerSection
        }
    }
</script>

<style scoped>
    .form-section {
        margin: 1vh 0 4vh;
    }
</style>
