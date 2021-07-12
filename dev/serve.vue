<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { SidebarContainer } from "@/entry.esm";
import { CategoryIconSidebar } from "@/entry.esm";
import { AuthorAndDateSidebar } from "@/entry.esm";

import { CategoryIcon } from "@/entry.esm";
import { SeeMoreBtn } from "@/entry.esm";
import AuthorAndDate from "../src/lib-components/AuthorAndDate.vue";
import { GetNotifiedSection } from "@/entry.esm";
import { SocialMediaIcons } from "@/entry.esm";
import { ShareIcon } from "@/entry.esm";
import { EntertainmentSideArticle } from "@/entry.esm";
import { FooterSocialMedia } from "@/entry.esm";
import { Datebar } from "@/entry.esm";
//import TextBelowArticlePreview from "../src/lib-components/TextBelowArticlePreview.vue";
import { FooterNav } from "@/entry.esm";
import { Footer } from "@/entry.esm";

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
    FooterNav,
  },
});
</script>

<template>
  <div id="app">
    <sidebar-container />
    <!-- <category-icon-sidebar category="opinion" />
    <author-and-date-sidebar author="Charley Baluja" published="Jan 31, 2020" />  -->
    <Datebar />
    <category-icon category="opinion"></category-icon>
    <SeeMoreBtn />
    <author-and-date author="Charley Baluja" published="Jan 31, 2020" />
    <GetNotifiedSection />
    <SocialMediaIcons />
      <ShareIcon /> 
    <FooterSocialMedia />
    <Navbar />
    <!-- <text-below-article-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/> -->
    <Datebar />
    <text-below-article-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/>
    <FooterNav />
      <EntertainmentSideArticle articleUrl="https://theconversation.com/us/topics/rocket-science-195" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU" category="entertainment" author="Charley Baluja" published="July 12, 2021" title="Podcasts: Radio, But Less Cool"/>
    <Footer />
  </div>
</template>

<style lang="scss"></style>
