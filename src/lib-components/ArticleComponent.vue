<template>
  <div id="article-component">
    <category-icon category="entertainment" />
    <h2 class="article-title">{{ title }}</h2>
    <p class="article-description">{{ description }}</p>
    <img class="article-main-img" src="../assets/article temp img.jpg" alt="" />
    <section class="article-metadata">
      <author-and-date
        class="article-author-and-date"
        author="Michael Whalen"
        published="Feb 1, 2021"
      />
      <div class="article-metadata-actions">
        <social-media-icons />
        <share-icon />
      </div>
    </section>
    <section
      class="article-text-section"
      v-for="paragraph in articleText"
      :key="paragraph"
    >
      <p class="article-text">{{ paragraph }}</p>
    </section>
  </div>
</template>

<script>
import AuthorAndDate from "./AuthorAndDate.vue";
import SocialMediaIcons from "./SocialMediaIcons.vue";
import ShareIcon from "./ShareIcon.vue";
import CategoryIcon from "./CategoryIcon.vue";

export default {
  name: "ArticleComponent",
  props: [],
  components: {
    AuthorAndDate,
    SocialMediaIcons,
    ShareIcon,
    CategoryIcon,
  },
  data() {
    return {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
      articleText: [
        "Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare era.",
        "Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur. Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur",
        "Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare era.",
        "Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur. Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur",
        "Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare erat iaculis. Donec suscipit porta lorem at luctus. Proin non sapien sem. Nulla ornare tempus consectetur. Proin non sapien sem. Nulla ornare tempus consectetur Cras consequat egestas ligula, eget venenatis nunc cursus in. Suspendisse pretium diam vel urna porta, vel ornare era.",
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../assets/variables';
.article-title {
  margin: 2rem auto;
}
.article-description,
.article-text {
  font-size: var(--paragraph-text);
}
.article-description {
  font-style: italic;
  font-size: var(--article-description);
  margin: 2rem auto;
}

.article-main-img {
  width: 100%;
  height: auto;
}

.article-metadata {
  display: flex;
  justify-content: space-between;
  margin: 4rem auto;
  flex-wrap: wrap;
}
.article-author-and-date {
  margin-bottom: 2rem;
}
.article-metadata-actions {
  display: flex;
}
</style>
