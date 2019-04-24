<template>
    <div class="form-section">
        <MdField>
            <label for="age">Age</label>
            <MdInput 
                name="age" 
                id="age"
                v-model="age" 
            />
        </MdField>
        <MdField>
            <label for="faculty"> 
                Faculty / Program
            </label>
            <MdTextarea 
                name="faculty" 
                id="faculty" 
                placeholder="ex. Engineering / Computer Engineering'. If you are in high school, please instead write the name of your high school"
                v-model="faculty"
            />
        </MdField>
        <MdField>
            <label for="reason-for-volunteer">
                Why do you want to volunteer?
            </label>
            <MdTextarea 
                name="reason-for-volunteer" 
                id="reason-for-volunteer" 
                v-model="reasonForVolunteer"
            />
             <span class="md-helper-text">
                Please provide a brief description
            </span>
        </MdField>
        <MdField>
            <label for="previous-task-description">
                Have you volunteered/participated in a hackathon before? If yes, explain your tasks.
            </label>
            <MdTextarea 
                name="previous-task-description" 
                id="previous-task-description"
                v-model="previousTaskDescription" 
            />
            <span class="md-helper-text">
                Please provide a brief description
            </span>
        </MdField>

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
        MdRadio
    } from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css';

    import { userForm } from "./mixins/userForm";

    Vue.use(MdCard);
    Vue.use(MdField);
    Vue.use(MdDatepicker);
    Vue.use(MdDialog);
    Vue.use(MdButton);
    Vue.use(MdCheckbox);
    Vue.use(MdRadio);

    export default {
        name: "CVolunteerSection",
        mixins: [userForm],
        data() {
            return {
                age: null,
                faculty: null,
                reasonForVolunteer: null,
                previousTaskDescription: null
            }
        }
    }
</script>

<style scoped>
</style>
