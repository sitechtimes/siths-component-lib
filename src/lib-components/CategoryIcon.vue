<template>
  <header>
    <h5
      :style="backgroundColor"
      class="article-details-category"
      id="article-category"
    >
      {{ category }}
    </h5>
  </header>
</template>

<script>
export default {
  name: "CategoryIcon",
  props: ["category"],
  data() {
    return {};
  },
  computed: {
    backgroundColor: function() {
      return "background-color: var(--" + this.category + ")";
    },
  },
};
</script>

<style lang="scss">
#article-category {
  text-transform: uppercase;
  width: max-content;
  //background-color: var(--opinion);
  color: var(--off-white);
  font-weight: 500;
  padding: 0.6rem 1rem;
  padding-top: 0.9rem;
  border-radius: 0.8rem;
  margin: 0.6rem 0 0.6rem 0;
}
</style>


<docs>
The Category Icon takes the category as aa prop and returns a unique button/tag with a unique color that can be used for each individual category.

## Variables Used:
--font, --off-white

## Examples

Category Icons

```jsx
<category-icon category="opinion"></category-icon>
```

```jsx
<category-icon category="entertainment"></category-icon>
```

```jsx
<category-icon category="sports"></category-icon>
```

```jsx
<category-icon category="sports"></category-icon>
<category-icon category="entertainment"></category-icon>
```


</docs>