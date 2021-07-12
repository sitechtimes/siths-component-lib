<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { SidebarContainer } from "@/entry.esm";
import { CategoryIcon } from "@/entry.esm";
import { AuthorAndDate } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    SidebarContainer,
    CategoryIcon,
    AuthorAndDate, 
  }
});
</script>

<template>
  <div id="app">
    <sidebar-container></sidebar-container>
    <category-icon category="opinion"></category-icon>
    <author-and-date author="Charley Baluja" published="Jan 31, 2020" /> 
  </div>
</template>

<style lang="scss"></style>
