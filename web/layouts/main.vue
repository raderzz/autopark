<template lang="pug">
  div
    section
      navbar
    section      
      .body-wrapper
        .body
          nuxt
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss" scoped>
  .body-wrapper {
    padding: 20px 5%;
    width: 100%;
    height: calc(100vh - 56px);
    background: #ddd;
    overflow-y: scroll;
  }
  .body {
    width: 100%;
    min-height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #fff;
    padding: 25px;
    
  }
  .v-sidebar-menu {
    position:fixed;
    top: 56px;
    left:-3px;
    width:100%;
    height: calc(100vh - 56px);
    padding-bottom:50px;
    -webkit-transition:width .3s;
    transition:width .3s;
    border-right: 2px solid #ddd;
  }
</style>

