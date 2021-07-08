<template>
  <div class="sidebar-article-details-author-date">
    <font-awesome-icon icon="user" class="sidebar-icon" id="author-icon" />
    <p id="sidebar-article-details-author">{{ author }}</p>
    <font-awesome-icon icon="clock" class="sidebar-icon" id="published-icon" />
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
*,
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: var(--font);
}

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
