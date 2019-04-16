<template>
    <div class="form md-layout">
        <div class="md-layout-item md-size-25">
        </div>
        <div class="md-layout-item">
            <CLoginForm 
                v-if="!isSignUpOpt"
            />
            <CSignupForm v-else />
        </div>
         <div class="md-layout-item md-size-25">
             {{ msg }}
        </div>
    </div>
</template>

<script>

import CLoginForm from "../components/CLoginForm.vue";
import CSignupForm from "../components/CSignupForm.vue";

import utils from '../utils';

export default {
    name: "PLogin",
    data() {
        return {
            isSignUpOpt: false,
            msg: ""
        }
    },
    components: {
        CLoginForm,
        CSignupForm
    },
    mounted() {

        const { params } = this.$route;

        this.isSignUpOpt = (Object.keys(params).length > 0)? params.isSignUpOpt : this.isSignUpOpt;

        this.saveNewAccount();
    },
    methods: {
        saveNewAccount() {

            utils.EventBus.$on('addNewAccount', data => {
                this.msg = JSON.stringify(data);
            });
        }
    },
}
</script>

<style scoped>
    .form {
        margin: 5vh 3vw;
    }
</style>

