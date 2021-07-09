<template>
<div class="footer-social-media-box">
    <h1 class="footer-header">Social Media</h1>
    <SocialMediaIcons class="footer-social-media"/>
</div>
</template>

<script>
export default {
    name: "FooterSocialMedia",
    components: { 
        SocialMediaIcons: () => import('./SocialMediaIcons.vue')
    },
}
</script>

<style lang="scss"> 
    .footer-social-media-box {
        width: 36rem;
        margin-left: 18rem;
        margin-top: 5.1rem;
    }
    .footer-social-media {
        text-align: center;
        margin-top: 1.5rem;
    }
</style>


<docs>
This is the section of the footer with social media icons that, when clicked, take the user to the newspaper's social media pages.
## Examples

```jsx
<FooterSocialMedia />
```

</docs>