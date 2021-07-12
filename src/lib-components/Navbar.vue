<template>
    <nav>
        <ul class="home-nav-ul">
            <a v-for="category in navData" 
            :key="category"
            href='navLink'>{{navType}}</a>
        </ul>
    </nav>
  
</template>

<script>
    export default {
    name: 'Navbar', // vue component name
    props: ["navData"]
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

Test Button

```jsx
<Button>Sample Secondary </Button>
```

    
   
</docs>
