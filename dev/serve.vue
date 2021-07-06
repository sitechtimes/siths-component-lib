<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { Button } from "@/entry.esm";
import { Sidebar } from '@/entry.esm';


export default Vue.extend({
  name: 'ServeDev',
  components: {
    Button, Sidebar,
  }
});
</script>

<template>
  <div id="app">
    <Button />
    <sidebar></sidebar>
  </div>
</template>

<style lang='scss'>

</style>
