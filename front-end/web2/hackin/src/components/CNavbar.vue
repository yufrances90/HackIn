<template>
    <div class="page-container">
        <MdToolbar class="md-primary md-medium">
            <h3 class="md-title" style="flex: 1">
                {{ title }}
            </h3>
        </MdToolbar>
    </div>
</template>

<script>

import Vue from 'vue'
import { 
    MdToolbar,
    MdButton 
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdToolbar);
Vue.use(MdButton);

export default {
  name: 'CNavbar',
  data: () => ({
      title: "HackMMunity"
  })
}
</script>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

  .md-app-toolbar {
    height: 196px;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

