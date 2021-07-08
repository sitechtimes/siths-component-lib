<template>
  <button class="see-more-btn">See more</button>
</template>

<script>
export default {
  name: 'SeeMoreBtn',
}
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.see-more-btn {
    background-color: var(--primary-color);
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 1.4rem;
    padding-top: 1.7rem;
    font: bold 1.74rem var(--font);
    color: var(--white);
    border: none;
    border-radius: 3.5rem;
    text-transform: uppercase;
}
@media only screen and (max-width: $x-small-screen) {
  .see-more-btn {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1.2rem;
    padding-top: 1.4rem;
    font-size: 1.2rem;
  }
}
</style>

<docs>
This is the button used in the Category Section to see more articles.
## Examples

```jsx
<SeeMoreBtn />
```

</docs>