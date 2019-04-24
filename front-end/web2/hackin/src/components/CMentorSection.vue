<template>
    <div class="form-section">
        <MdField>
            <label for="organization">
                School and/or Organization Affiliation
            </label>
            <MdInput 
                name="organization" 
                id="organization"
                v-model="organization" 
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
        <div class="flex-display">
            <label for="areas"> 
                What are your areas of interest for mentoring?
            </label>
            <br>
            <MdCheckbox 
                v-model="areas" 
                name="areas" 
                id="areas"
                :value="item.key" 
                v-for="item in areaList" 
                :key="item.key"
            >
                {{ item.value }}
            </MdCheckbox>
        </div>

        <!-- 
            TODO: What is availability?
        -->
    </div>
</template>

<script>

    import { userForm } from "./mixins/userForm";

    export default {
        name: "CMentorSection",
        mixins: [userForm],
        data() {
            return {
                areaList: [
                    {
                        key: "bs",
                        value: "Business & Strategy"
                    },
                    {
                        key: "pi",
                        value: "Project Ideation"
                    },
                    {
                        key: "d",
                        value: "Design"
                    },
                    {
                        key: "fed",
                        value: "Front End Development"
                    },
                    {
                        key: "bed",
                        value: "Back End Development"
                    },
                    {
                        key: "i",
                        value: "iOS"
                    },
                    {
                        key: "a",
                        value: "Android"
                    },
                    {
                        key: "ml",
                        value: "Machine Learning"
                    },
                    {
                        key: "va",
                        value: "VR / AR"
                    },
                    {
                        key: "b",
                        value: "Blockchain"
                    },
                    {
                        key: "ds",
                        value: "Data Science"
                    }
                ],
                areas: [],
                organization: null,
                github: null,
                linkedin: null,
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
