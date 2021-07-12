<template>
  <div>
        <font-awesome-icon class="social-media-icon" :icon="['fa', 'share']" />
  </div>
</template>

<script>
export default {
name: "ShareIcon"
}
</script>

<style>

</style>

<docs>
This component is used on the article page underneath the article's main picture. It isn't used in the footer, which is why it's a separate component. It will take the user to the Tech Times social media pages when the Tech Times has social media pages. 

## Variables Used:
--primary-color: Primary color is the tech gold color. It is the main color of the page, and will update across the page if it is changed in the scss file.
The style of this component is identical to the style on the SocialMediaIcons component. 

```jsx
  <ShareIcon /> 
```

</docs>