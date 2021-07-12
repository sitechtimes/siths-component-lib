<template>
<div class="footer-social-media-box">
    <h2 class="footer-header">Social Media</h2>
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
    @media only screen and (max-width: $x-small-screen) {
        .footer-header {
            font-size: var(--h3);
        }  
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
--font: Which controls the font of the page. If for whatever reason the font is changed in a theme, it will change here.
--primary-color: If a theme were to change this variable it would also change the color of the button.
$x-small-screen: A media query breakpoint for extra small devices like phones so that the page is responsive. If this variable is changed, the media query breakpoint will change in all other components. This variable is an SCSS variable because CSS custom properties do not work in media queries.

## Examples
```jsx
<FooterSocialMedia />
```

</docs>