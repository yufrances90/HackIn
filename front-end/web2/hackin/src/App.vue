<template>
    <div id="app">
        <CNavbar />
        <router-view/>
    </div>
</template>

<script>

    import CNavbar from './components/CNavbar.vue';

    export default {
        name: 'app',
        components: {
            CNavbar
        },
        mounted() {

            const address = "4400 Buchanan Street, Burnaby BC, Canada";
            
            this.$store.dispatch("getCoordiantesByAddress", address);
        },
    }
</script>

<style lang="scss">

    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
        primary: md-get-palette-color(blue, A200), // The primary color of your application
        accent: md-get-palette-color(red, A200), // The accent or secondary color
        theme: light // This can be dark or light
    ));

    @import "~vue-material/dist/theme/all"; // Apply the theme

    .submit-btn {
        color: blue !important;
        float: right;
        margin-bottom: 3vh;
    }

</style>
