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
        {navLink: 'news', navType: 'NEWS'},
        {navLink: 'opinion', navType: 'OPINION'},
        {navLink: 'politics', navType: 'POLITICS'},
        {navLink: 'entertainment', navType: 'ENTERTAINMENT'},
        {navLink: 'science', navType: 'SCIENCE'},
        {navLink: 'activities', navType: 'ACTIVITIES'},
        {navLink: 'events', navType: 'EVENTS'} 
      ]
    }
  }  
});
</script>

<template>
  <div id="app">
  <Navbar />
  </div>
</template>
