<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { SidebarContainer } from "@/entry.esm";
import { CategoryIconSidebar } from "@/entry.esm";
import { AuthorAndDateSidebar } from "@/entry.esm";
import { AuthorAndDate } from "@/entry.esm";
import { CategoryIcon } from "@/entry.esm";

import Sidebar from "../src/lib-components/Sidebar.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    SidebarContainer,
    CategoryIconSidebar,
    AuthorAndDateSidebar,
    CategoryIcon,

    AuthorAndDate,

    AuthorAndDate,
    CategoryIcon,

    Sidebar,
  },
});
</script>

<template>
  <div id="app">
    <sidebar-container />
    <category-icon category="opinion"></category-icon>

    <author-and-date author="Charley Baluja" published="Jan 31, 2020" />

    <category-icon-sidebar category="opinion" />
    <author-and-date-sidebar author="Charley Baluja" published="Jan 31, 2020" />

    <author-and-date author="Regular" published="Regular 31, 2020" />
    <category-icon category="entertainment" />
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
