<template>
    <div id="app">
        <c-navbar></c-navbar>
    </div>
</template>

<script>

    import {
        getClient
    } from "./utils";

    import CNavbar from './components/CNavbar.vue';

    const testConnection = async () => {

        const apiClient = getClient();

        const response = await apiClient.get("/");

        console.log(response);
    }

    export default {
        name: 'app',
        components: {
            CNavbar
        },
        mounted() {
            testConnection();
        },
    }
</script>

<style lang="scss">

    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
        primary: md-get-palette-color(black, A200), // The primary color of your application
        accent: md-get-palette-color(red, A200), // The accent or secondary color
        theme: light // This can be dark or light
    ));

    @import "~vue-material/dist/theme/all"; // Apply the theme

</style>
