<template>
    <div>
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
            </div>
        </div>
        
        <MdSnackbar
            :md-position="snackbar.position" 
            :md-duration="snackbar.isInfinity ? Infinity : snackbar.duration" 
            :md-active.sync="snackbar.showSnackbar" 
            md-persistent
        >
            <span>
                {{ msg }}
            </span>
            <MdButton 
                class="md-primary" 
                @click="snackbar.showSnackbar = false"
            >
                Close
            </MdButton>
        </MdSnackbar>
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
            msg: "",
            snackbar: {
                showSnackbar: false,
                position: 'center',
                duration: 4000,
                isInfinity: false
            }
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

            utils.EventBus.$on('addNewAccount', async data => {

                const response = await utils.Client.post("/accounts", data);

                if (response.status === 200) {
                    this.msg = JSON.stringify(response.data);
                }

                this.snackbar.showSnackbar = true;
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

