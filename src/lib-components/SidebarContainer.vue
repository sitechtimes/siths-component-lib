<template>
  <section class="sidebar-container">
    <h3 class="sidebar-heading">Trending</h3>
    <sidebar
      v-for="article in trending"
      :key="article"
      :category="article.category"
      :author="article.author"
      :published="article.published"
      :title="article.title"
      :imgUrl="article.imgUrl"
      :articleUrl="article.articleUrl"
    /><!-- css var for imgUrl? -->

    <h3 class="sidebar-heading">More Like This</h3>
    <sidebar
      v-for="article in moreLikeThis"
      :key="article"
      :author="article.author"
      :published="article.published"
      :title="article.title"
      :imgUrl="article.imgUrl"
      :articleUrl="article.articleUrl"
    />
  </section>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "SidebarContainer",
  components: { Sidebar },
  data() {
    return {
      trending: [
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 31, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
          articleUrl: "https://google.com",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 32, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
          articleUrl: "https://google.com",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 33, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
          articleUrl: "https://google.com",
        },
      ],
      moreLikeThis: [
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 34, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
          articleUrl: "https://google.com",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 35, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
          articleUrl: "https://google.com",
        },
        {
          category: "opinion",
          author: "Charley Baluja",
          published: "Jan 36, 2020",
          title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
          imgUrl: "../assets/temp image.jpg",
          articleUrl: "https://google.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sidebar-container {
  border-left: 2px solid #d9b75e;
  max-width: 50rem;
}
.sidebar-heading {
  padding: 1.5rem 2.5rem;
  margin: 0;
}
</style>
