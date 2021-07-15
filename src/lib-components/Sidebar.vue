<template>
  <div class="sidebar-article">
    <img :href="articleUrl" :src="imgUrl" :alt="imgAlt" class="sidebar-img"/>
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
    imgAlt: String,
    articleUrl: String,
  },
};
</script>

<style lang="scss">

@import '../assets/variables';
:root {
  --sidebarArticleWidth: 30vw;
  --sidebarImgWidth: 9rem;
  --sidebarSidePadding: min(2.5vw, 4.16rem);
  --sidebarDetailsPaddingLeft: 1.7rem;
  --toggleBorder: none;
  --centerSquareThumbnail: 50% 50%/100% 100% no-repeat;
}


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
  //background: url("../assets/temp image.jpg") var(--centerSquareThumbnail); /* 50% 50% centers image in div */
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

<docs>
The Sidebar article is the article found in the sidebar and has an image on one side and the article's info on the other

## Variables Used:
--sidebarSidePadding, --sidebarArticleWidth, --sidebarSidePadding, --toggleBorder, --sidebarDetailsPaddingLeft, --sidebarImgWidth, --centerSquareThumbnail, --

## Examples:

```jsx
<Sidebar author="Daniel Briskman" published="November 42, 2780" title="One Piece is Bad and here's why" imgUrl="https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg" imgAlt="Sad Man"/>
```
</docs>
