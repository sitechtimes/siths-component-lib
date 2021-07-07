<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { Button } from "@/entry.esm";
import { Sidebar } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Button,
    Sidebar,
  },
});
</script>

<template>
  <div id="app">
    <sidebar
      category="opinion"
      author="Charley Baluja"
      published="Jan 31, 2020"
      title="Hello this is Dr. Death Defying: MCR ain't dead yet"
      imgUrl="../assets/temp image.jpg"
    /><!-- css var for imgUrl? -->
    <sidebar
      category="opinion"
      author="Michael Whalen"
      published="Sept 30, 2020"
      title="Short Title Testing Testing"
      imgUrl="../assets/temp image.jpg"
    />
    <sidebar
      category="opinion"
      author="Very Longnametest"
      published="Jan 31, 2020"
      title="Very Long Title Very Long Title Very Long Title Very Long Title"
      imgUrl="../assets/temp image.jpg"
    />
  </div>
</template>

<style lang="scss"></style>
