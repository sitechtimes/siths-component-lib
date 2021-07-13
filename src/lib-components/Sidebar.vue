<template>
  <div class="sidebar-article">
    <a :href="articleUrl" target="_blank" rel="noopener noreferrer"
      ><span class="sidebar-img"
    /></a>
    <div class="sidebar-article-details">
      <category-icon-sidebar category="opinion"></category-icon-sidebar>
      <a
        :href="articleUrl"
        target="_blank"
        rel="noopener noreferrer"
        id="sidebar-article-details-title"
      >
        {{ title }}
      </a>
      <author-and-date-sidebar
        :author="author"
        :published="published"
      ></author-and-date-sidebar>
    </div>
  </div>
</template>

<script>
import CategoryIconSidebar from "./CategoryIconSidebar.vue";
import AuthorAndDateSidebar from "./AuthorAndDateSidebar.vue";

export default {
  components: { CategoryIconSidebar, AuthorAndDateSidebar },
  name: "Sidebar",
  props: {
    category: String,
    author: String,
    published: String,
    title: String,
    imgUrl: String,
    articleUrl: String,
  },
};
</script>

<style lang="scss">
:root {
  --sidebarArticleWidth: 30vw;
  --sidebarImgWidth: 9rem;
  --sidebarSidePadding: min(2.5vw, 4.16rem);
  --sidebarDetailsPaddingLeft: 1.7rem;
  --toggleBorder: none;
  --centerSquareThumbnail: 50% 50%/100% 100% no-repeat;
}

*,
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 62.5%;

  font-family: var(--font);
}

/* p {
  font-size: 1.6rem;
} */

.temp-img {
  width: 30vw;
  height: auto;
}
.sidebar-article {
  width: var(--sidebarArticleWidth);
  max-width: 50rem;
  display: flex;
  border: var(--toggleBorder);

  padding: 1.5rem var(--sidebarSidePadding);
  /* margin-bottom: 2rem; */
  /* float: right; */
}
.sidebar-article:hover {
  background-color: var(--hover);
  cursor: pointer;

  transition: all 0.3s ease-out;
}

/* .sidebar-img {
  height: 100%;
  width: auto;
  border: 1px solid black;
} */
.sidebar-img {
  background: url("../assets/temp image.jpg") var(--centerSquareThumbnail); /* 50% 50% centers image in div */
  height: var(--sidebarImgWidth);
  width: var(--sidebarImgWidth);
  border-radius: 1rem;

  border: var(--toggleBorder);

  display: inline-block;
  vertical-align: middle;
}
/* .thumb1 a {
  display: block;
  width: 250px;
  height: 250px;
} */

.sidebar-article-details {
  width: calc(
    var(--sidebarArticleWidth) - var(--sidebarImgWidth) -
      (var(--sidebarSidePadding) * 2)
  );
  max-width: 32.65rem;
  padding-left: var(--sidebarDetailsPaddingLeft);
  display: flex;
  flex-direction: column;

  display: inline-block;
}

#sidebar-article-details-title {
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.35;

  text-decoration: none;
  color: var(--black);

  margin: 0;
}

/* .sidebar-article-details-author-date {
  display: flex;
}
.sidebar-article-details-author-date > p {
  font-size: 1rem;
  //font-size: var(--small-text);
  text-transform: uppercase;
  margin-right: 1.5rem;
} */
.sidebar-icon {
  font-size: 1.4rem;
  padding-right: 4px;
}
#author-icon,
#published-icon {
  font-size: 1.4rem;
}

#sidebar-article-details-title {
  font-weight: bold;
}

.example-img {
  border: var(--toggleBorder);
  height: 11.7rem;
  width: 40rem;
}

@media only screen and (max-width: $mid-screen) {
  :root {
    --sidebarArticleWidth: 100vw;
    --sidebarSidePadding: 15vw;
  }
  .sidebar-container {
    max-width: none;
    border: none;
  }
  .sidebar-article {
    max-width: none;
    padding: 2.5rem var(--sidebarSidePadding);
  }
  .sidebar-article-details {
    max-width: none;
  }
}

@media only screen and (max-width: 450px) {
  :root {
    --sidebarSidePadding: 12vw;
  }
}
@media only screen and (max-width: 380px) {
  :root {
    --sidebarSidePadding: 8vw;
  }
}
</style>

/* Ripple effect on click? */
