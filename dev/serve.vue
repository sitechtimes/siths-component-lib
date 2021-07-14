<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { CategoryIcon } from "@/entry.esm";
import AuthorAndDate from "../src/lib-components/AuthorAndDate.vue";
import { CardComponent } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CategoryIcon, 
    AuthorAndDate,  
    CardComponent,
  },
});
</script>

<template>
  <div id="app">
    <CardComponent 
    articleUrl="https://www.thetravel.com/best-surfing-spots-california/" author="Daniel Briskman" published="Jan 21, 2021" category="sports" imageTitle="A Girl Surfing" title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard." 
    />
  </div>
</template>

<style lang="scss"></style>
