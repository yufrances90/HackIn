<template>
    <div class="form-section">
        <MdField>
            <label for="age">Age</label>
            <MdInput name="age" id="age" />
        </MdField>
        <MdField>
            <label for="race"> 
                Race / Ethnicity
            </label>
            <MdSelect v-model="race" name="race" id="race">
                <MdOption :value="item" v-for="item in raceList" :key="item">
                    {{ item }}
                </MdOption>
            </MdSelect>
        </MdField>
        <MdField>
            <label for="gender"> 
                Gender
            </label>
            <MdSelect v-model="gender" name="gender" id="gender">
                <MdOption :value="item" v-for="item in genderList" :key="item">
                    {{ item }}
                </MdOption>
            </MdSelect>
        </MdField>
        <MdField>
            <label for="number-of-hackathons">
                Number of Attended Hackathons
            </label>
            <MdInput name="number-of-hackathons" id="number-of-hackathons" />
        </MdField>
        <MdField>
            <label for="current-level-of-study">
                Most Current Level of Study
            </label>
            <MdInput name="current-level-of-study" id="current-level-of-study" />
        </MdField>
        <MdField>
            <label for="program">
                Major / Program
            </label>
            <MdInput name="program" id="program" />
        </MdField>
        <MdField>
            <label for="school">
                School
            </label>
            <MdInput name="school" id="school" />
        </MdField>
        <MdField>
            <label for="graduation-year">
                Graduation Year
            </label>
            <MdInput name="graduation-year" id="graduation-year" />
        </MdField>
        <MdField>
            <label for="github">
                GitHub
            </label>
            <MdInput name="github" id="github" />
        </MdField>
        <MdField>
            <label for="linkedin">
                LinkedIn
            </label>
            <MdInput name="linkedin" id="linkedin" />
        </MdField>
        <MdField>
            <label for="personal-website">
                Personal Website
            </label>
            <MdInput name="personal-website" id="personal-website" />
        </MdField>
        <MdField>
            <label for="self-description">
                I would describe myself as a...
            </label>
            <MdInput 
                name="self-description" 
                id="self-description" 
            />
        </MdField>
        <MdField>
            <label for="programming-experience">
                What programming experience do you have?
            </label>
            <MdTextarea name="programming-experience" id="programming-experience" />
        </MdField>
        <MdField>
            <label for="like-to-learn">
                What would you like to learn or get out of this hackathon?
            </label>
            <MdTextarea name="like-to-learn" id="like-to-learn" />
        </MdField>
        <MdField>
            <label for="most-proud-personal-project">
                What is something you have done/created (personal project) that you are most proud of and why?
            </label>
            <MdTextarea name="most-proud-personal-project" id="most-proud-personal-project" />
        </MdField>

        <div>
            <MdCheckbox v-model="confirm_adult">
                I certify that I am 18 years of age or older
            </MdCheckbox>
        </div>
    </div>
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
        name: "CHackerSection",
        data() {
            return {
                raceList: [
                    "American Indian / Alaskan Native",
                    "Asian / Pacific Islander",
                    "Black / African American",
                    "Hispanic",
                    "White / Caucasian",
                    "Multiple Ethnicity / Other (Please Specify)",
                    "Prefer not to answer"
                ],
                race: null,
                genderList: [
                    "Male",
                    "Female",
                    "Other",
                    "Prefer not to answer"
                ],
                gender: null,
                "confirm_adult": null
            }
        },
    }
</script>

<style scoped>
</style>
