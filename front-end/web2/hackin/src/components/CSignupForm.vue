<template>
    <div>
        <MdField>
            <label for="usrname">
                Username
            </label>
            <MdInput 
                id="usrname"
                name="usrname"
                v-model="usrname"
            />
        </MdField>
        <MdField>
            <label for="pwd">
                Password
            </label>
            <MdInput 
                id="pwd"
                name="pwd"
                v-model="password"
                type="password"
            />
        </MdField>
        <MdField>
            <label for="confirm-pwd">
                Confirm Password
            </label>
            <MdInput 
                id="confirm-pwd"
                name="confirm-pwd"
                v-model="confirmPassword"
                type="password"
            />
        </MdField>
        <MdButton
            class="sign-up-btn"
            @click="signUpBtnClick"
            :disabled="checkIfDisableSignupBtn"
        >
            Sign Up
        </MdButton>
        
        <MdSnackbar
            :md-position="snackbar.position"
            :md-duration="snackbar.isInfinity ? Infinity : snackbar.duration"
            :md-active.sync="snackbar.showSnackbar"
            md-persistent
        >
            <span>
                Passwords Do Not Match! Please Try Again!
            </span>
            <md-button class="md-primary" @click="snackbar.showSnackbar = false">Retry</md-button>
        </MdSnackbar>
    </div>
</template>

<script>
export default {
    name: "CSignupForm",
    data() {
        return {
            usrname: "",
            password: "",
            confirmPassword: "",
            snackbar: {
                showSnackbar: false,
                position: 'center',
                duration: 4000,
                isInfinity: false
            }
        }
    },
    computed: {
        checkIfDisableSignupBtn() {

            const isUsrnameEmpty = this.usrname === "";
            const isPwdEmpty = this.password === "";
            const isCPwdEmpty = this.confirmPassword === "";

            return isUsrnameEmpty || isPwdEmpty || isCPwdEmpty;
        }
    },
    methods: {
        signUpBtnClick() {

            const isPwdMatched = this.confirmPassword === this.password;

            if (!isPwdMatched) {
                this.snackbar.showSnackbar = true;
            }

            const userInfo = {
                usrname: this.usrname,
                password: this.password
            }

            console.log(userInfo);
        }
    },
}
</script>

<style scoped>

    .sign-up-btn {
        float: right;
    }
</style>

