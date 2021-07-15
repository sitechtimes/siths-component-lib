<template>
  <div class="card-component card-component-image" title="Humanoid Entity Surfing In The Ocean at Dusk">
        <a :href="articleUrl" class="flex-col card-component-text-container">
            <div class="flex-row card-component-category-author-date">
                <category-icon :category="category" class="card-component-category" />
                <author-and-date :author="author" :published="published" class="card-component-author-and-date" />
            </div>
            <div class="text-overflow card-component-title"> {{title}}</div>
        </a>
    </div>
</template>

<script>
export default ({
  name: "CardComponent",
  props: ["author", "articleUrl", "published", "category", "imageUrl", "imageAlt", "title"]
})
</script>

<style lang="scss">

@import '../assets/variables';
a:link { text-decoration: none; color: var(--black)}
a:visited { text-decoration: none;  color: var(--black)}
a:hover { text-decoration: none;  color: var(--black)}
a:active { text-decoration: none;  color: var(--black)}
.card-component{
    cursor: pointer;
    width: 67.3rem;
    height: 57.8rem;
    border-radius: 1.5rem;
    position: relative;
}
.card-component-image {
    background: var(--greyToBlack) ,  url("../assets/card-comp-tempimg.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
}
.flex-col {
    display: flex;
    flex-direction: column;
}
.flex-row {
    display: flex;
    flex-direction: row;
}
.card-component-text-container{
    width: 80.2%;
    max-height: 50%;
    margin: 0 5.2rem auto;
    position: absolute;
    top: 50%;
}
.card-component-category-author-date {
    max-height: 5rem auto;
    padding-bottom: 1.7rem;
}
.card-component-category {
    padding-right: 1.7rem;
    color: var(--white);
}
.card-component-author-and-date {
    position: relative;
    height: 1.6rem;
    padding-top: 1.5rem;
     color: var(--white);
}
.text-overflow {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 5; //The Number of Lines Shown Before Cutting Off the Text
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-width: $large-screen) {
        -webkit-line-clamp: 5;
    }
    @media only screen and (max-width: $mid-screen) {
        -webkit-line-clamp: 4;
    }
    @media only screen and (max-width: $x-small-screen) {
        -webkit-line-clamp: 4;
    }
}
.card-component-title {
    font-weight: bold;
    font-size: 3.6rem;
    line-height: 4rem;
    color: var(--white);
}
</style>

<docs>

</docs>