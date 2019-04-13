<template>
    <div class="form-section">
        <MdField>
            <label for="age">Age</label>
            <MdInput name="age" id="age" />
        </MdField>
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

    import CMentorSection from './CMentorSection.vue';
    import CHackerSection from './CHackerSection.vue';

    Vue.use(MdCard);
    Vue.use(MdField);
    Vue.use(MdDatepicker);
    Vue.use(MdDialog);
    Vue.use(MdButton);
    Vue.use(MdCheckbox);
    Vue.use(MdRadio);

    export default {
        name: "CVolunteerSection"
    }
</script>

<style scoped>
</style>
