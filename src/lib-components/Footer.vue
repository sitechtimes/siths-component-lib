<template>
  <footer class="footer-container">
      <GetNotifiedSection class="form"/>
      <FooterSocialMedia class="social"/>
      <FooterNav class="nav"/>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    components: {
        GetNotifiedSection: () => import('./GetNotifiedSection.vue'),
        FooterSocialMedia: () => import('./FooterSocialMedia.vue'),
        FooterNav: () => import('./FooterNav.vue'),
    }
}
</script>

<style lang="scss">
@import '../assets/variables';
    .footer-container {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        grid-template-areas: 
            "form nav"
            "social nav"; 
        margin: 0 auto;
        background-color: var(--grey);
        padding: 3rem 15%;
    }
    .form { 
        grid-area: form; 
    }
    .social { 
        grid-area: social; 
    }
    .nav { 
        grid-area: nav;
    }
    @media only screen and (max-width: $large-screen) {
        .footer-container {
            padding: 3rem;
        }
    }
     @media only screen and (max-width: $mid-screen) {
        .footer-container {
            display: flex;
            flex-direction: column;
        }
    }

</style>

<docs>
The Final Footer that will be seen at the bottom. It uses GetNotifiedSection, FooterSocialMedia, and FooterNav to make a Footer with all the needed information.
## Variables Used:
--grey

## Examples:

```jsx
<Footer />
```
</docs>