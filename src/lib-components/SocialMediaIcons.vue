<template>
  <div>
      <font-awesome-icon class="social-media-icon" :icon="['fab', 'instagram-square']" />
      <font-awesome-icon class="social-media-icon" :icon="['fab', 'twitter']" />
        <font-awesome-icon class="social-media-icon" :icon="['fab', 'facebook']" />
  </div>
</template>

<script>
export default {
name: "SocialMediaIcons"
}
</script>

<style>
.social-media-icon{
    font-size: 3.5rem;
    color: var(--primary-color);
    margin-left: 2.5rem;
}
</style>

<docs>
This component is used in the footer's social media section and underneath the articles' main pictures. In the footer, it takes the user to the Tech Times' social media pages. Underneath the articles, it provides a way for the users to share the article on their favorite social media sites. 

## Variables Used:
--primary-color: Primary color is the tech gold color. It is the main color of the page, and will update across the page if it is changed in the scss file.

```jsx
<SocialMediaIcons />
```

</docs>