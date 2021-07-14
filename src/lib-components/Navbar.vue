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

## Variables Used:
--font

## Examples

```jsx
<Navbar />
```
   
</docs>
