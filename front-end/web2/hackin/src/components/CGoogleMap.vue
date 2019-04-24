<template>
    <div class="google-map">
        <gmap-map
            :center="coordinates"
            :zoom="15"
            style="width: 600px; height: 300px"
        >
            <gmap-marker
                :position="coordinates"
                :clickable="true"
                :draggable="true"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "CGoogleMap",
        props: ["coordinates"]
    }
</script>

<style scoped>
    .google-map {
        display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
    }
</style>

