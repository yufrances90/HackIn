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
                        <MdInput 
                            name="first-name" 
                            id="first-name"
                            v-model="firstName" 
                        />
                    </MdField>
                    <MdField>
                        <label for="last-name">Last Name</label>
                        <MdInput 
                            name="last-name" 
                            id="last-name"
                            v-model="lastName" 
                        />
                    </MdField>
                    <MdField>
                        <label for="phone-number">Phone Number</label>
                        <MdInput 
                            name="phone-number" 
                            id="phone-number"
                            v-model="phoneNumber" 
                        />
                    </MdField>
                    <MdField>
                        <label for="email">Email Address</label>
                        <MdInput 
                            name="email" 
                            id="email"
                            v-model="email" 
                        />
                    </MdField>
                    <MdField>
                        <label for="dietary-restrictions">
                            Do you have any dietary restrictions/concerns or allergies?
                        </label>
                        <MdInput 
                            name="dietary-restriction" 
                            id="dietary-restriction"
                            v-model="dietaryRestriction"
                        />
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
                            <MdCheckbox v-model="confirmReadMlhConduct">
                                I have read and agree to the ​MLH Code of Conduct
                            </MdCheckbox>
                        </div>
                        <hr>
                        <MdButton 
                            class="submit-btn"
                            @click="addUser"
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

    import CMentorSection from './CMentorSection.vue';
    import CHackerSection from './CHackerSection.vue';
    import CVolunteerSection from './CVolunteerSection.vue';

    import utils from "../utils";

    export default {
        name: "CUserForm",
        props: ["usrname", "user", "hackathonId"],
        data() {
            return {
                list: [
                    "firstName",
                    "lastName",
                    "phoneNumber",
                    "email",
                    "usrname"
                ],
                tshirtSizeList: [
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                userType: null,
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                dietaryRestriction: "",
                tShirtSize: null,
                confirmReadMlhConduct: false
            }
        },
        components: {
            CMentorSection,
            CHackerSection,
            CVolunteerSection
        },
        created() {

            const vm = this;

            utils.EventBus.$on("updateValueByKey", (key, value) => {
                vm.$data[key] = value;
            });
        },
        methods: {
            addUser() {

                const userByHackathon = this.constructUserByHackathon();

                utils.EventBus.$emit("getUserByUsrname", this.usrname);

                setTimeout(() => {

                    if (this.user) {
                        utils.EventBus.$emit(
                            "updateUser", 
                            this.user, 
                            userByHackathon,
                            this.hackathonId);
                    } else {

                        const newUser = this.constructNewUser();

                        newUser.hackathons[this.hackathonId] = userByHackathon;

                        utils.EventBus.$emit("addNewUser", newUser, this.hackathonId);
                    }
                }, 2500);
            },
            constructUserByHackathon() {

                const dataKeys = Object.keys(this.$data)
                    .filter(key => !key.includes("List") && !key.includes("list"))
                    .filter(key => !this.list.includes(key));

                const userByHackathon = {};

                dataKeys.forEach(key => {
                    userByHackathon[key] = this[key];
                });

                userByHackathon.hackathonId = this.hackathonId;

                return userByHackathon;
            },
            constructNewUser() {

                const newUser = {};

                this.list.forEach(key => {
                    newUser[key] = this[key];
                });

                newUser["hackathons"] = {};

                newUser["createdAt"] = new Date();

                return newUser;
            }
        },
    }
</script>

<style scoped>
    .form-section {
        margin: 2vh 0 4vh;
    }
</style>
