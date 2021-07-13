<template>
    <div class="card-component card-component-image" title="Humanoid Entity Surfing In The Ocean at Dusk">
        <a :href="articleUrl" class="flex-col">
            <div class="flex-row card-component-category-author-date">
                <category-icon :category="category" class="card-component-category" />
                <author-and-date :author="author" :published="published" class="card-component-category" />
            </div>
            <div class="card-component-title"> {{title}}</div>
        </a>
    </div>

</template>

<script>
export default ({
    name: "CardComponenet",
    props: ["author", "articleUrl", "published", "category", "imageUrl", "imageAlt", "title"]
})
</script>

<style lang="scss">
:root {
    
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

a:link { text-decoration: none; color: var(--black)}
a:visited { text-decoration: none;  color: var(--black)}
a:hover { text-decoration: none;  color: var(--black)}
a:active { text-decoration: none;  color: var(--black)}

.card-component{
    width: 67.3rem;
    height: 57.8rem;
    border-radius: 15px;

    border: 1px hotpink solid;
}
.card-component-image {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(132, 132, 132, 0.29) 54.17%, rgba(0, 0, 0, 0.5) 65.1%),  url("../assets/card-comp-tempimg.jpg");
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

.card-component-category-author-date {
    
}
.card-component-title {
font-weight: bold;
font-size: 36px;
line-height: 40px;
color: var(--white);
}

</style>

<docs>

</docs>