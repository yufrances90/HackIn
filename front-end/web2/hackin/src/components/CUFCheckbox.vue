<template>
    <div>
        Hello from CUFCheckbox
    </div>
</template>

<script>
    export default {
        name: "CUFCheckbox",
        props: ["shifts"],
        mounted() {
            console.log(this.shifts);
        },
    }
</script>

<style scoped>
</style>

