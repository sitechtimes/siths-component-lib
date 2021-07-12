<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { SidebarContainer } from "@/entry.esm";
import { CategoryIconSidebar } from "@/entry.esm";
import { AuthorAndDateSidebar } from "@/entry.esm";


export default Vue.extend({
  name: "ServeDev",
  components: {
    SidebarContainer,
    CategoryIconSidebar,
    AuthorAndDateSidebar,     
  },
});
</script>

<template>
  <div id="app">
    <sidebar-container />
    <!-- <category-icon-sidebar category="opinion" />
    <author-and-date-sidebar author="Charley Baluja" published="Jan 31, 2020" />  -->
  </div>
</template>

<style lang="scss"></style>
