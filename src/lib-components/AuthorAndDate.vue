<template>
  <div class="sidebar-article-details-author-date">
    <font-awesome-icon icon="user" class="sidebar-icon" id="author-icon" />
    <p id="sidebar-article-details-author">{{ author }}</p>
    <font-awesome-icon icon="clock" class="sidebar-icon" id="published-icon" />
    <p id="sidebar-article-details-date">{{ published }}</p>
  </div>
</template>

<script>
export default {
  name: "AuthorAndDate",
  props: ["author", "published"],
};
</script>

<style lang="scss">

.sidebar-article-details-author-date {
  display: flex;
}
.sidebar-article-details-author-date > p {
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 1.5rem;
}
.sidebar-icon {
  font-size: 1.4rem;
  padding-right: 4px;
}
#author-icon,
#published-icon {
  font-size: 1.4rem;
}
</style>

<docs>
The Author of the Article and the Date it was published are shown here. Both are inputted to create the component.

##Examples

Enter an author and a date

```jsx
<author-and-date author="Charley Baluja" published="Jan 31, 2020" />
```

```jsx
<author-and-date author="Donald Trump" published="Jan 31, 1990" />
```

```jsx
<author-and-date author="Mark Twain" published="Jan 31, 2100" />
```

</docs>