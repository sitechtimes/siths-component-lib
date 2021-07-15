<template>
  <div class="cat-article">
    <div class="cat-labels">
   <category-icon :category="category" />
   <author-and-date :author="author" :published="published" class="auth-date"/>
   </div>
   <a :href="articleUrl" class="cat-article-title" >{{title}}</a>
   
  </div>
</template>

<script>
export default {
name: "MobileCategoryArticle", 
props: ["category", "author", "published", "title"]
}
</script>

<style>
.cat-article{
      border-bottom: .3rem solid var(--primary-color); 
      margin-bottom: 2rem;
       display: inline-block; 
}
.cat-labels{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.auth-date{
  margin-left: 1.7rem;
}
.cat-article-title{
  font-size: var(--h3);
  font-weight: 700;
}
</style>

<docs>
This is what the articles on the individual category pages will look like. There is no picture for this component, only a label, author, date, and title. 
## Variables Used:
--primary-color
## Examples
```jsx
 <MobileCategoryArticle category="entertainment" author="Daniel Briskman" published="July 14, 2021" title="Pokemon Gen 4 Sucks"/>
```
</docs>