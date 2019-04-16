<template>
    <div>
        <MdField>
            <label for="username">
                Userame
            </label>
            <MdInput 
                name="username"
                id="username" 
                v-model="usrname"
            />
        </MdField>
        <MdField>
            <label for="password">
                Password
            </label>
            <MdInput 
                name="password"
                id="password" 
                type="password"
                v-model="password"
            />
        </MdField>
        <MdButton
            @click="loginBtnClick"
            class="login-btn"
        >
            Login
        </MdButton>
    </div>
</template>

<script>

import utils from '../utils';

export default {
    name: "CLoginForm",
    data() {
        return {
            usrname: "",
            password: ""
        }
    },
    methods: {
        loginBtnClick() {

            const account = {
                usrname: this.usrname,
                password: this.password
            }

            utils.EventBus.$emit("userLogin", account);
        }
    },
}
</script>

<style scoped>

    .login-btn {
        float: right;
    }
</style>

