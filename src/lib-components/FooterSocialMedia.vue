<template>
<div class="footer-social-media-box">
    <h2 class="footer-header footer-sm-header">Social Media</h2>
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
    .footer-sm-header {
        font-size: var(--h3);
    }
    .footer-social-media-box {
        width: 36rem;
        margin-left: 18rem;
        margin-top: 5.1rem;
    }
    .footer-social-media {
        text-align: center;
        margin-top: 1.5rem;
    }
    @media only screen and (max-width: $x-small-screen) {
        .footer-social-media-box {
            width: 30rem;
            margin: 0 auto;
            border-bottom: none;
        }
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