<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { CategoryIcon } from "@/entry.esm";
import { SeeMoreBtn } from "@/entry.esm";
import AuthorAndDate from "../src/lib-components/AuthorAndDate.vue";
import { GetNotifiedSection } from "@/entry.esm";
import { SocialMediaIcons } from "@/entry.esm";
import { ShareIcon } from "@/entry.esm";
import { EntertainmentSideArticle } from "@/entry.esm";
import { FooterSocialMedia } from "@/entry.esm";
import { Datebar } from "@/entry.esm";
import TextBelowArticlePreview from "../src/lib-components/TextBelowArticlePreview.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CategoryIcon, 
    SeeMoreBtn,
    AuthorAndDate,
    GetNotifiedSection,
    SocialMediaIcons,
    ShareIcon,
    EntertainmentSideArticle,
    FooterSocialMedia,
    Datebar,
    TextBelowArticlePreview
  },
});
</script>

<template>
  <div id="app">
    <category-icon category="opinion"></category-icon>
    <SeeMoreBtn />
    <author-and-date author="Charley Baluja" published="Jan 31, 2020" />
    <GetNotifiedSection />
    <SocialMediaIcons />
      <ShareIcon /> 
      <EntertainmentSideArticle />
    <FooterSocialMedia />
    <Navbar />
    <Datebar />
    <text-below-article-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/>
  </div>
</template>

<style lang="scss"></style>
