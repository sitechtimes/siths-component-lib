<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { Button } from "@/entry.esm";

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Button,
  },
  data () {
    return {
      navbar: [
        {navLink: 'url', navType: 'NEWS'},
        {navLink: 'url', navType: 'OPINION'},
        {navLink: 'url', navType: 'POLITICS'},
        {navLink: 'url', navType: 'ENTERTAINMENT'},
        {navLink: 'url', navType: 'SCIENCE'},
        {navLink: 'url', navType: 'ACTIVITIES'},
        {navLink: 'url', navType: 'EVENTS'} 
      ]
    }
  }
});
</script>

<template>
  <div id="app">
  <Navbar :navData='navbar'/>
  </div>
</template>
