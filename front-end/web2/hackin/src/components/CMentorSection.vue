<template>
    <div class="form-section">
        <MdField>
            <label for="organization">
                School and/or Organization Affiliation
            </label>
            <MdInput name="organization" id="organization" />
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
        <div class="flex-display">
            <label for="areas"> 
                What are your areas of interest for mentoring?
            </label>
            <br>
            <MdCheckbox 
                v-model="areas" 
                name="areas" 
                id="areas"
                :value="item" 
                v-for="item in areaList" 
                :key="item"
            >
                {{ item }}
            </MdCheckbox>
        </div>

        <!-- 
            TODO: What is availability?
        -->
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
        name: "CMentorSection",
        data() {
            return {
                areaList: [
                    "Business & Strategy",
                    "Project Ideation",
                    "Design",
                    "Front End Development",
                    "Back End Development",
                    "iOS",
                    "Android",
                    "Machine Learning",
                    "VR / AR",
                    "Blockchain",
                    "Data Science"
                ],
                areas: []
            }
        }
    }
</script>

<style scoped>
    .flex-display {
        display: flex;
        flex-direction: column;;
    }
</style>
