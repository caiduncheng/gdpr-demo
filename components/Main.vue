<template></template>

<script>
export default {
  async fetch() {
    this.posts = await this.$axios.$get("https://api.nuxtjs.dev/posts");
  },
};
</script>

<style>
</style>