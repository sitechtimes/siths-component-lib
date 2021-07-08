<template>
  <p class="sidebar-article-details-category" id="sidebar-article-category">
    CATEGORY
  </p>
</template>

<script>
export default {
  name: "CategoryIcon",
  props: {
    category,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
#sidebar-article-category {
  text-transform: uppercase;

  width: max-content;
  background-color: var(--opinion);
  color: var(--off-white);
  font-size: 0.9rem;
  font-weight: 500;

  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  margin: 3px 0 0.4rem 0;
}
</style>
