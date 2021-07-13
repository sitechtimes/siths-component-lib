<template>
  <button class="see-more-btn">See more</button>
</template>

<script>
export default {
  name: 'SeeMoreBtn',
}
</script>

<style lang="scss">

.see-more-btn {
    background-color: var(--primary-color);
    padding: 1.7rem 3rem;
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
This button is a simple button that will be used to generate new articles in the page after a user clicks "see-more".

It isn't a very dynamic component and takes no arguments, which as a simple button that will only be used a in a few situation's it doesn't need to do.

## Variables Used:
--primary-color, --white

## Examples

```jsx
<SeeMoreBtn />
```

</docs>