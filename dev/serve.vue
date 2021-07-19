<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { SidebarContainer } from "@/entry.esm";
import { CategoryIconSidebar } from "@/entry.esm";
import { AuthorAndDateSidebar } from "@/entry.esm";
import { AuthorAndDate } from "@/entry.esm";
import { CategoryIcon } from "@/entry.esm";
import { SeeMoreBtn } from "@/entry.esm";
import { GetNotifiedSection } from "@/entry.esm";
import { SocialMediaIcons } from "@/entry.esm";
import { ShareIcon } from "@/entry.esm";
import { EntertainmentSideArticle } from "@/entry.esm";
import { FooterSocialMedia } from "@/entry.esm";
import { Datebar } from "@/entry.esm";
//import TextBelowArticlePreview from "../src/lib-components/TextBelowArticlePreview.vue";
import { FooterNav } from "@/entry.esm";
import { Footer } from "@/entry.esm";
import { TextBelowArticlePreview } from "@/entry.esm";
import { MobileNav } from "@/entry.esm";
import { CategoryArticle } from "@/entry.esm";
import Sidebar from "../src/lib-components/Sidebar.vue";
import { OpinionSlider } from "@/entry.esm";
import { CardComponent } from "../src/lib-components";
import { MobileCategoryArticle } from "@/entry.esm";
import ArticleComponent from "../src/lib-components/ArticleComponent.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    SidebarContainer,
    CategoryIconSidebar,
    AuthorAndDateSidebar,
    CategoryIcon,
    SeeMoreBtn,
    AuthorAndDate,
    GetNotifiedSection,
    SocialMediaIcons,
    ShareIcon,
    EntertainmentSideArticle,
    FooterSocialMedia,
    Datebar,
    TextBelowArticlePreview,
    CategoryArticle,
    FooterNav,
    AuthorAndDate,
    CategoryIcon,
    Footer,
    Sidebar,
    TextBelowArticlePreview,
    MobileNav,
    OpinionSlider,
    CardComponent,
    MobileCategoryArticle,
    ArticleComponent,
    MobileNav,
  },
});
</script>

<template>
  <div id="app">
    <Datebar />
    <Navbar />
    <MobileNav />
    <sidebar-container />
    <div class="global-container">
    <article-component />
    <OpinionSlider />
    <CategoryArticle
      articleUrl="https://theconversation.com/us/topics/rocket-science-195"
      imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
      category="opinion"
      author="Charley Baluja"
      published="July 12, 2021"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
    />
    <MobileCategoryArticle category="entertainment" author="Daniel Briskman" published="July 14, 2021" title="Pokemon Gen 4 Sucks"/>
    <text-below-article-preview
      articleUrl="https://theconversation.com/us/topics/rocket-science-195"
      author="Daniel Briskman"
      published="Jan 31, 2020"
      category="opinion"
      imageAlt="Space X Rocket"
      title="I hate rockets, and this is why you should too"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
    />
    <EntertainmentSideArticle
      articleUrl="https://theconversation.com/us/topics/rocket-science-195"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
      category="entertainment"
      author="Charley Baluja"
      published="July 12, 2021"
      title="Podcasts: Radio, But Less Cool"
    />
    <CardComponent 
    CardComponentImg="https://static0.thetravelimages.com/wordpress/wp-content/uploads/2019/11/California_Surfing_1710x900.png?q=50&fit=crop&w=960&h=500&dpr=1.5"
    CardComponentImgAlt="A Girl Surfing" 
    articleUrl="https://www.thetravel.com/best-surfing-spots-california/" 
    author="Daniel Briskman" 
    published="Jan 21, 2021" 
    category="sports" 
    title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard." 
    />
    <category-icon category="entertainment" />
    <author-and-date author="Charley Baluja" published="Jan 31, 2020" />
    <category-icon-sidebar category="entertainment" />
    <author-and-date-sidebar author="Charley Baluja" published="Jan 31, 2020" />
    </div>
    <SeeMoreBtn />
    <GetNotifiedSection />
    <SocialMediaIcons />
    <ShareIcon />
    <FooterSocialMedia />
    <Footer />
  </div>
</template>

<style lang="scss">
@media only screen and (max-width: $large-screen) {
  *,
  html,
  body {
    font-size: 58%;
  }
}

@media only screen and (max-width: $mid-screen) {
  *,
  html,
  body {
    font-size: 50%;
  }
}

@media only screen and (max-width: $x-small-screen) {
  *,
  html,
  body {
    font-size: 45%;
  }
}
</style>
