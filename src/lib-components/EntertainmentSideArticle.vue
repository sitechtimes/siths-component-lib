<template>
  <article class="entertainment-side">
    <div class="entertainment-img-div">
    <a :href="articleUrl"><img :href="articleUrl" :src="imageUrl" :alt="imageAlt" class="entertainment-side-img"></a>
    </div>
    <div class="entertainment-side-img-content">
    <category-icon :category="category"></category-icon>
<div class="entertainment-labels">
       <author-and-date :author="author" :published="published" />
       </div>
       <h3 class="entertainment-title">{{title}}</h3>
       </div>
  </article>
</template>

<script>
export default {
name: "EntertainmentSideArticle", 
props: ["articleUrl", "imageUrl", "imageAlt", "category", "author", "published", "title"]
}
</script>

<style>
.entertainment-side{
  display: flex;
  flex-direction: row;

}
.entertainment-side-img{
  /* these height + width things are arbitrary right now, they'll be more specific when the other entertainment component is made */
  height: 22rem;
  width: 18rem;
  border-radius: 1.5rem;
}
.entertainment-side-img-content{
width: 40vw;
margin-left: 2rem;
}
.entertainment-title{
  font-size: 2.4rem;
  font-weight: 700;
}
.entertainment-labels{
 margin: 2rem 0 1.7rem 0rem;
}
</style>

<docs>
This component is used in the entertainment category. It is one of the two side articles on the side of the main entertainment article picture. 

## Variables Used
N/A

## Examples

```jsx
  <EntertainmentSideArticle articleUrl="https://theconversation.com/us/topics/rocket-science-195" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU" category="entertainment" author="Charley Baluja" published="July 12, 2021" title="Podcasts: Radio, But Less Cool"/>
```

</docs>