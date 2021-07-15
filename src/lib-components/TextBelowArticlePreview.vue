<template>
   <article class="text-below-preview-article">
       <a :href="articleUrl"><img :href="articleUrl" :src="imageUrl" :alt="imageAlt" class="article-image"></a>
       <h5 class="article-info">
            <category-icon :category="category" class="article-cat"/>
            <author-and-date :author="author" :published="published" class="article-data" />
       </h5>
       <a :href="articleUrl" class="article-title">{{title}}</a>
   </article>
</template>

<script>
//import AuthorAndDate from './AuthorAndDate.vue';
//import CategoryIcon from './CategoryIcon.vue';
export default {
  name: "TextBelowArticlePreview",
  props: ["author", "articleUrl", "published", "category", "imageUrl", "imageAlt", "title"],
};
</script>

<style lang="scss">

@import '../assets/variables';
*,
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: var(--font);
}
a:link { text-decoration: none; color: var(--black)}
a:visited { text-decoration: none;  color: var(--black)}
a:hover { text-decoration: none;  color: var(--black)}
a:active { text-decoration: none;  color: var(--black)}
.text-below-preview-article {
  display: flex;
  flex-direction: column;
  width: 46.1rem;
  height: 37rem;
  margin-right: 3rem;
}
.article-info {
  display: flex;
  width: 42.2rem;
}
.article-image {
  width: 42.2rem;
  height: 21.7rem;
  border-radius: 1.5rem;
}
.article-cat {
  margin-right: 2rem;
}
.article-title {
  margin: 0;
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
}
.article-data {
    padding-top: 1rem;
}
@media only screen and (max-width: $x-small-screen) {
  .article-cat {
    margin-right: 1rem;
  }
  .article-data {
    margin-right: 0.25rem;
  }
  .article-info {
    width: 35rem;
  }
  .article-image {
    width: 37rem;
  }
  .article-title {
    width: 37rem;
  }
}


</style>

<docs>
This is one of the ways articles on the homepage will be represented (currently Opinion and News).

## Variables Used:
--font

## Examples

```jsx
<text-below-article-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/>
```

</docs>