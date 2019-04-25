<template>
    <div>
        <MdSnackbar
            :md-position="position" 
            :md-duration="isInfinity ? Infinity : duration" 
            :md-active.sync="sSnackbar" 
            md-persistent
        >
            <span>
                {{ message }}
            </span>
            <MdButton
                class="md-primary" @click="hideSnackbarBtnClick"
            >
                Close
            </MdButton>
        </MdSnackbar>
    </div>
</template>

<script>

    import utils from "../utils";

    export default {
        name: "CSnackbar",
        props: ["showSnackbar", "message"],
        data() {
            return {
                position: 'center',
                duration: 4000,
                isInfinity: false,
                sSnackbar: false
            }
        },
        methods: {
            hideSnackbarBtnClick() {
                utils.EventBus.$emit("hideSnackbar");
            }
        },
        watch: {
            showSnackbar() {
                this.sSnackbar = this.showSnackbar;
            }
        },
    }
</script>

<style scoped>
</style>

