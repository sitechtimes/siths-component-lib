<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { CategoryIcon } from "@/entry.esm";
import { ArticleComponent } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CategoryIcon,
    ArticleComponent,
  },
});
</script>

<template>
  <div id="app">
    <article-component />
    <!-- <category-icon-sidebar category="opinion" />
    <author-and-date-sidebar author="Charley Baluja" published="Jan 31, 2020" />  -->
  </div>
</template>

<style lang="scss">
@media only screen and (max-width: $large-screen) {
  *,
  html,
  body {
    font-size: 58%;
  }
}

@media only screen and (max-width: $mid-screen) {
  *,
  html,
  body {
    font-size: 50%;
  }
}

@media only screen and (max-width: $x-small-screen) {
  *,
  html,
  body {
    font-size: 45%;
  }
}
</style>
