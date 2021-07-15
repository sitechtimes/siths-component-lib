<template>
  <div>
    <h5
      :style="backgroundColor"
      class="sidebar-article-details-category"
      id="sidebar-article-category"
    >
      {{ category }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "CategoryIconSidebar",
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
#sidebar-article-category {
  text-transform: uppercase;
  width: max-content;
  //background-color: var(--opinion);
  color: var(--off-white);
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 0.6rem;
  margin: 0.3rem 0 0.5rem 0;

  padding: 0.4em 0.6rem 0.2em 0.6rem;
}
</style>

<docs>
This component is the same as above, with different width and height

## Variables Used:
--font, --off-white

## Examples

Category Icons

```jsx
<CategoryIconSidebar category="sports"/>
<CategoryIconSidebar category="entertainment"/>
```


</docs>
