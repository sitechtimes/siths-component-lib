<template>
  <div>
    <p
      :style="backgroundColor"
      class="sidebar-article-details-category"
      id="sidebar-article-category"
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

#sidebar-article-category {
  text-transform: uppercase;
  width: max-content;
  //background-color: var(--opinion);
  color: var(--off-white);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 0.6rem;
  margin: 0.3rem 0 0.5rem 0;
}
</style>

<docs>
This is the Category Icon which shows individual icons such as Entertainment, Opinion, Sports, etc each with a unique colour.
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
