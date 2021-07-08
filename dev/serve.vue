<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { CategoryIcon } from "@/entry.esm";
import { SeeMoreBtn } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CategoryIcon,
    SeeMoreBtn
  }
});
</script>

<template>
  <div id="app">
    <category-icon category="opinion"></category-icon>
    <SeeMoreBtn />
  </div>
</template>

<style lang="scss"></style>
