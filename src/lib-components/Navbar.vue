<template>
    <nav>
        <ul class="home-nav-ul">
            <a v-for="category in navbar" 
            :key="category"
            :href='category.navLink'
            class="home-nav-li">{{category.navType}}</a>
        </ul>
    </nav>
  
</template>

<script>
    export default {
    name: 'Navbar', // vue component name
    props: [],
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
};
</script>


<style lang="scss">
    a {
        text-decoration: none;
        color: inherit;
    }
    .home-nav-li {
        font-family: var(--font);
        display: inline;
        padding: 2rem;
    }
    .home-nav-ul {
        display: flex;
        justify-content: center;
    }
</style>

<docs>
This is the Navigation Bar - it links to all other pages related to a category
## Examples



```jsx
<Navbar />
```

    
   
</docs>
