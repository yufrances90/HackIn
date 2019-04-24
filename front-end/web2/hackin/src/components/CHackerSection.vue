<template>
    <div class="form-section">
        <MdField>
            <label for="age">Age</label>
            <MdInput 
                name="age" 
                id="age"
                type="number"
                v-model="age" 
            />
        </MdField>
        <MdField>
            <label for="race"> 
                Race / Ethnicity
            </label>
            <MdSelect 
                v-model="race" 
                name="race" 
                id="race"
            >
                <MdOption 
                    :value="item.key" 
                    v-for="item in raceList" 
                    :key="item.key"
                >
                    {{ item.value }}
                </MdOption>
            </MdSelect>
        </MdField>
        <MdField>
            <label for="gender"> 
                Gender
            </label>
            <MdSelect 
                v-model="gender" 
                name="gender" 
                id="gender"
            >
                <MdOption 
                    :value="item.key" 
                    v-for="item in genderList" 
                    :key="item.key"
                >
                    {{ item.value }}
                </MdOption>
            </MdSelect>
        </MdField>
        <MdField>
            <label for="number-of-hackathons">
                Number of Attended Hackathons
            </label>
            <MdInput 
                name="number-of-hackathons" 
                id="number-of-hackathons"
                type="number"
                v-model="numberOfHackathons" 
            />
        </MdField>
        <MdField>
            <label for="current-level-of-study">
                Most Current Level of Study
            </label>
            <MdInput 
                name="current-level-of-study" 
                id="current-level-of-study"
                v-model="currentLevelOfStudy" 
            />
        </MdField>
        <MdField>
            <label for="program">
                Major / Program
            </label>
            <MdInput 
                name="program" 
                id="program"
                v-model="program" 
            />
        </MdField>
        <MdField>
            <label for="school">
                School
            </label>
            <MdInput 
                name="school" 
                id="school"
                v-model="school" 
            />
        </MdField>
        <MdField>
            <label for="graduation-year">
                Graduation Year
            </label>
            <MdInput 
                name="graduation-year" 
                id="graduation-year"
                v-model="graduationYear" 
            />
        </MdField>
        <MdField>
            <label for="github">
                GitHub
            </label>
            <MdInput 
                name="github" 
                id="github"
                v-model="github" 
            />
        </MdField>
        <MdField>
            <label for="linkedin">
                LinkedIn
            </label>
            <MdInput 
                name="linkedin" 
                id="linkedin"
                v-model="linkedin" 
            />
        </MdField>
        <MdField>
            <label for="personal-website">
                Personal Website
            </label>
            <MdInput 
                name="personal-website" 
                id="personal-website"
                v-model="personalWebsite" 
            />
        </MdField>
        <MdField>
            <label for="self-description">
                I would describe myself as a...
            </label>
            <MdInput 
                name="self-description" 
                id="self-description"
                v-model="selfDescription" 
            />
        </MdField>
        <MdField>
            <label for="programming-experience">
                What programming experience do you have?
            </label>
            <MdTextarea 
                name="programming-experience" 
                id="programming-experience"
                v-model="programmingExperience" 
            />
        </MdField>
        <MdField>
            <label for="like-to-learn">
                What would you like to learn or get out of this hackathon?
            </label>
            <MdTextarea 
                name="like-to-learn" 
                id="like-to-learn"
                v-model="whatLikeToLearn" 
            />
        </MdField>
        <MdField>
            <label for="most-proud-personal-project">
                What is something you have done/created (personal project) that you are most proud of and why?
            </label>
            <MdTextarea 
                name="most-proud-personal-project" 
                id="most-proud-personal-project"
                v-model="mostProudPersonalProject" 
            />
        </MdField>

        <div>
            <MdCheckbox v-model="confirmAdult">
                I certify that I am 18 years of age or older
            </MdCheckbox>
        </div>
    </div>
</template>

<script>

    import { userForm } from "./mixins/userForm";

    export default {
        name: "CHackerSection",
        mixins: [userForm],
        data() {
            return {
                raceList: [
                    {
                        key: "aian",
                        value: "American Indian / Alaskan Native"
                    },
                    {
                        key: "api",
                        value: "Asian / Pacific Islander"
                    },
                    {
                        key: "baa",
                        value: "Black / African American"
                    },
                    {
                        key: "h",
                        value: "Hispanic"
                    },
                    {
                        key: "wc",
                        value: "White / Caucasian"
                    },
                    {
                        key: "meo",
                        value: "Multiple Ethnicity / Other"
                    },
                    {
                        key: "p",
                        value: "Prefer not to answer"
                    }
                ],
                genderList: [
                    {
                        key: "m",
                        value: "Male"
                    },
                    {
                        key: "f",
                        value: "Female"
                    },
                    {
                        key: "o",
                        value: "Other"
                    },
                    {
                        key: "p",
                        value: "Prefer not to answer"
                    }
                ],
                age: null,
                race: null,
                gender: null,
                numberOfHackathons: null,
                currentLevelOfStudy: null,
                program: null,
                school: null,
                graduationYear: null,
                github: null,
                linkedin: null,
                personalWebsite: null,
                selfDescription: null,
                programmingExperience: null,
                whatLikeToLearn: null,
                mostProudPersonalProject: null,
                confirmAdult: false
            }
        }
    }
</script>

<style scoped>
</style>
