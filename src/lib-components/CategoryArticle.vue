<template>
    <div class="category-article">
        <div class="category-img-div">
            <a :href="articleUrl"><img :href="articleUrl" :src="imageUrl" :alt="imageAlt" class="category-article-img"></a>
        </div>
        <div class="category-article-img-content">
            <div class="category-labels">
                <category-icon class="category-article-icon" :category="category"></category-icon>
                <author-and-date class="category-article-authdate" :author="author" :published="published" />
            </div>
            <h3 class="category-title">{{title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
name: "CategoryArticle", 
props: ["articleUrl", "imageUrl", "imageAlt", "category", "author", "published", "title"]
}
</script>

<style lang="scss">
@import '../assets/variables';
    .category-article{
    display: flex;
    flex-direction: row;
    }
    .category-article-img{
    /* these height + width things are arbitrary right now, they'll be more specific when the other category component is made */
    height: 23rem;
    width: 35rem;
    border-radius: 1.5rem;
    }
    .category-article-img-content{
        width: 40vw;
        margin: 0 0 auto 4rem;
    }
    .category-title{
    font-size: 2.5rem;
    font-weight: 700;
    width: 45rem;
    padding-top: 1rem;
    }
    .category-labels{
    margin-top: 2rem;
    display: flex;
    }
    .category-article-icon {
        padding-right: 1.5rem;
    } 
    .category-article-authdate {
        margin: auto 0;
        line-height: 2.2rem;
        padding-top: 1rem;
    }
    @media only screen and (max-width: $mid-screen) {
        .category-article{
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            margin: auto
        }
        .category-article-img{
            height: 16rem;
            width: 22rem;
            border-radius: 1.5rem;
        }
        .category-article-img-content{
            width: 40vw;
            margin: 0 15rem 0 0;
        }
        .category-title{
            font-size: 2rem;
            font-weight: 700;
            width: 45rem;
            padding-top: 1rem;
        }
        .category-article-icon {
            width: 3rem;
            padding-right: 1.5rem;
            height: 3rem;
        } 
        .category-article-authdate {
            margin-left: 7rem;
            line-height: 2.2rem;
            padding-top: 1rem;
        }
        .category-labels{
            margin-top: 2rem;
            display: flex;
            width: 40rem;
        }
    }
    @media only screen and (max-width: $small-screen) {
        .category-article{
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            margin: auto
        }
        .category-article-img{
            height: 12rem;
            width: 16.5rem;
            border-radius: 1.5rem;
        }
        .category-article-img-content{
            width: 40vw;
            margin: 0 15rem 0 0;
        }
        .category-title{
            font-size: 1.8rem;
            font-weight: 700;
            width: 40rem;
            padding-top: 1rem;
        }
        .category-article-icon {
            width: 3rem;
            padding-right: 1.5rem;
            height: 3rem;
        } 
        .category-article-authdate {
            margin-left: 7rem;
            line-height: 2.2rem;
            padding-top: 1rem;
        }
        .category-labels{
            margin-top: 2rem;
            display: flex;
            width: 40rem;
        }
    }
</style>

<docs>
This component is used in the category category. It is one of the two side articles on the side of the main category article picture. 

```jsx
  <CategoryArticle articleUrl="https://theconversation.com/us/topics/rocket-science-195" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU" category="opinion" author="Charley Baluja" published="July 12, 2021" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."/>
```

</docs>