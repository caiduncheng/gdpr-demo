<template>
  <div id="app">
    <!-- <NavBar fixed /> -->
    <!-- <Main /> -->
    <Nuxt />
    <Cookie />
    <!-- Start of HubSpot Embed Code -->
    <!-- End of HubSpot Embed Code -->
  </div>
</template>
<script>

export default {
  async mounted() {
    if(process.browser) {
      await import('../plugins/hotspot.js')
    }
  }
};
</script>
<style>
</style>