<template>
    <nav>
        <ul class="home-nav-ul">
            <a v-for="category in navbar" 
            :key="category"
            :href='category.navLink'
            class="home-nav-li"><li>{{category.navType}}</li></a>
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
        //width: calc(100% / 7 + 2rem);
        list-style-type: none;
        font-size: var(--h4);
    }
    .home-nav-ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding-top: 3rem;
        padding-bottom: 3rem;
        padding-left: 10%;
        padding-right: 10%;
        width: 100%;
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
