<template>
  <section class="sidebar-container">
    <h1 class="sidebar-heading">Trending</h1>
    <sidebar
      v-for="article in trending"
      :key="article"
      :category="article.category"
      :author="article.author"
      :published="article.published"
      :title="article.title"
      :imgUrl="article.imgUrl"
    /><!-- css var for imgUrl? -->

    <h1 class="sidebar-heading">More Like This</h1>
    <sidebar
      v-for="article in moreLikeThis"
      :key="article"
      :category="article.category"
      :author="article.author"
      :published="article.published"
      :title="article.title"
      :imgUrl="article.imgUrl"
    />
  </section>
</template>

<script>
export default {
  name: "SidebarContainer",
  data() {
    return {
      trending: [
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 31, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 32, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 33, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
        },
      ],
      moreLikeThis: [
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 34, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 35, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 36, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.sidebar-container {
  border-left: 2px solid #d9b75e;
}
.sidebar-heading {
  padding: 1.5rem 5rem;
  font-size: 3rem;
  font-weight: bold;
}
</style>
