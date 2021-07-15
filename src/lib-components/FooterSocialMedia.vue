<template>
<div class="footer-social-media-box">
    <h3 class="footer-header footer-sm-header">Social Media</h3>
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
@import '../assets/variables';
    .footer-sm-header {
        font-size: var(--h3);
    }
    .footer-social-media-box {
        width: 36rem;
        margin: 5.1rem auto;
    }
    .footer-social-media {
        text-align: center;
        margin-top: 1.5rem;
    }
    @media only screen and (max-width: $x-small-screen) {
    }
</style>


<docs>
This is the section of the footer with social media icons that, when clicked, take the user to the newspaper's social media pages.

## Variables Used:
--font, --primary-color, --accent-color, --h3, 

## Examples
```jsx
<FooterSocialMedia />
```

</docs>