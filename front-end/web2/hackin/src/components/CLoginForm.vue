<template>
    <div>
        <MdField>
            <label for="username">
                Userame
            </label>
            <MdInput 
                name="username"
                id="username" 
                v-model="username"
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
            @click="validateAndLogin"
            class="login-btn"
        >
            Login
        </MdButton>
    </div>
</template>

<script>
export default {
    name: "CLoginForm",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        validateAndLogin() {

            // fetch record from backend 
            

            console.log(this.password);
        }
    },
}
</script>

<style scoped>

    .login-btn {
        float: right;
    }
</style>

