<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import AuthorAndDate from "../src/lib-components/AuthorAndDate.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    AuthorAndDate,
  },
});
</script>

<template>
  <div id="app">
    <author-and-date author="Charley Baluja" published="Jan 31, 2020" />
  </div>
</template>

<style lang="scss"></style>
