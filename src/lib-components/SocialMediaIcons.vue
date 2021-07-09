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
    margin-left: 1.25rem;
    margin-right: 1.25rem;

}
</style>

<docs>
This component is used in the footer's social media section and underneath the articles' main pictures. It's intent is to take the user to the techtimes' social media pages once it is clicked. 

## Variables Used:
--primary-color: Primary color is the tech gold color. It is the main color of the page, and will update across the page if it is changed in the scss file.

```jsx
<SocialMediaIcons />
```

</docs>