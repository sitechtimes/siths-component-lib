<template>
    <nav>
        <ul class="home-nav-ul">
            <a href=""><li class="home-nav-li">NEWS</li></a>
            <a href=""><li class="home-nav-li">POLITICS</li></a>
            <a href=""><li class="home-nav-li">ENTERTAINMENT</li></a>
            <a href=""><li class="home-nav-li">OPINION</li></a>
            <a href=""><li class="home-nav-li">SCIENCE</li></a>
            <a href=""><li class="home-nav-li">ACTIVITIES</li></a>
            <a href=""><li class="home-nav-li">EVENTS</li></a>
        </ul>
    </nav>
  
</template>

<script>
    export default {
    name: 'Navbar', // vue component name
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
This is my test button
## Examples

Test Button

```jsx
<Button>Sample Secondary </Button>
```

    
   
</docs>
