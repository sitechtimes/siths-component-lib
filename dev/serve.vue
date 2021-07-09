<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { ArticlePiece } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    ArticlePiece,
  },
});
</script>

<template>
  <div id="app">
    <ArticlePiece
      category="Opinion"
      authorName="Daniel Briskman"
      date="Jan 21, 2021"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. "
    />
  </div>
</template>

<style lang="scss"></style>
