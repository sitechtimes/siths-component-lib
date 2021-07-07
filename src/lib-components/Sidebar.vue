<template>
  <div class="sidebar-article">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <span class="sidebar-img" />
    <div class="sidebar-article-details">
      <p class="sidebar-article-details-category" id="sidebar-article-category">
        {{ category }}
      </p>
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
      <p id="sidebar-article-details-title">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    category: String,
    author: String,
    published: String,
    title: String,
    imgUrl: String,
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

@import url("../assets/variables.scss");

:root {
  --sidebarArticleWidth: 51.5rem;
}

*,
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 62.5%;

  font-family: var(--mainFont);
  color: var(--textColorMain);

  transition: all 0.3s ease-out;
}

p {
  font-size: 1.6rem;
}

.sidebar-article {
  height: 13.5rem;
  width: var(--sidebarArticleWidth);
  display: flex;
  border: var(--toggleBorder);
  background-color: var(--articleBackground);

  padding: 1.5rem 5rem;
  /* margin-bottom: 2rem; */
  /* float: right; */
}
.sidebar-article:hover {
  background-color: var(--articleBackgroundHover);
  cursor: pointer;
}

/* .sidebar-img {
  height: 100%;
  width: auto;
  border: 1px solid black;
} */
.sidebar-img {
  background: url("../assets/temp image.jpg") var(--centerSquareThumbnail); /* 50% 50% centers image in div */
  height: 100%;
  width: 11rem;
  border-radius: 1rem;

  border: var(--toggleBorder);
}
/* .thumb1 a {
  display: block;
  width: 250px;
  height: 250px;
} */

.sidebar-article-details {
  width: calc(var(--sidebarArticleWidth) - 22.5rem);
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
}
#sidebar-article-category {
  text-transform: uppercase;

  width: max-content;
  background-color: var(--opinionCategoryBackground);
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 500;

  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  margin: 3px 0 0.4rem 0;
}
#sidebar-article-details-title {
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 1.35;
}

.sidebar-article-details-author-date {
  display: flex;
  margin-bottom: 0.5rem;
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

#sidebar-article-details-title {
  font-weight: bold;
}

body {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.example-img {
  border: var(--toggleBorder);
  height: 11.7rem;
  width: 40rem;
}
</style>

/* Ripple effect on click? */
