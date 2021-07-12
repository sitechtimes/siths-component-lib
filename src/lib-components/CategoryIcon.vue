<template>
  <div>
    <p
      :style="backgroundColor"
      class="article-details-category"
      id="article-category"
    >
      {{ category }}
    </p>
  </div>
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
*,
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: var(--font);
}
#article-category {
  text-transform: uppercase;
  width: max-content;
  //background-color: var(--opinion);
  color: var(--off-white);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 0.8rem;
  margin: 0.5rem 0 0.5rem 0;
}
</style>


<docs>
The Category Icon takes the category as aa prop and returns a unique button/tag with a unique color that can be used for each individual category.

## Variables Used:
--font: Which controls the font of the page. If for whatever reason the font is changed in a theme, it will change here.

--off-white: A colour.

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