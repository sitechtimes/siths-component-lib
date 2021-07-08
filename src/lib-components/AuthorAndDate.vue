<template>
  <div class="sidebar-article-details-author-date">
    <span class="sidebar-icon material-icons" id="author-icon"
      >account_circle</span
    >
    <p id="sidebar-article-details-author">{{ author }}</p>
    <span class="sidebar-icon material-icons" id="published-icon"
      >query_builder</span
    >
    <p id="sidebar-article-details-date">{{ published }}</p>
  </div>
</template>

<script>
export default {
  name: "AuthorAndDate",
  props: ["author", "published"],
};
</script>

<style lang="scss">
.sidebar-article-details-author-date {
  display: flex;
}
.sidebar-article-details-author-date > p {
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 1.5rem;
}
.sidebar-icon {
  font-size: 1.4rem;
  padding-right: 4px;
}
#author-icon,
#published-icon {
  font-size: 1.4rem;
}
</style>
