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
                    <MdField>
                        <label for="dietary-restrictions">
                            Do you have any dietary restrictions/concerns or allergies?
                        </label>
                        <MdInput name="dietary-restriction" id="dietary-restriction" />
                        <span class="md-helper-text">
                            ex. Vegetarian, Vegan, etc
                        </span>
                    </MdField>
                    <MdField>
                        <label for="tShirtSize"> 
                            T-Shirt Size
                        </label>
                        <MdSelect v-model="tShirtSize" name="tShirtSize" id="tShirtSize">
                            <MdOption :value="item" v-for="item in tshirtSizeList" :key="item">
                                {{ item }}
                            </MdOption>
                        </MdSelect>
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
                    

                    <div v-show="userType">
                        <div>
                            <MdCheckbox v-model="confirm_read_mlh_conduct">
                                I have read and agree to the ​MLH Code of Conduct
                            </MdCheckbox>
                        </div>
                        <hr>
                        <MdButton 
                            class="submit-btn"
                        >
                            Submit
                        </MdButton>
                    </div>

                    
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
        MdRadio,
        MdMenu,
        MdList
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
    Vue.use(MdMenu);
    Vue.use(MdList);

    export default {
        name: "CUserForm",
        data() {
            return {
                userType: null,
                tshirtSizeList: [
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                confirm_read_mlh_conduct: null
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
        margin: 2vh 0 4vh;
    }
</style>
