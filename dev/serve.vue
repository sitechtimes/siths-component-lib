<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { Button } from "@/entry.esm";
import { Sidebar } from "@/entry.esm";
import { SidebarContainer } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Button,
    Sidebar,
    SidebarContainer,
  },
});
</script>

<template>
  <div id="app">
    <sidebar-container></sidebar-container>
  </div>
</template>

<style lang="scss"></style>
