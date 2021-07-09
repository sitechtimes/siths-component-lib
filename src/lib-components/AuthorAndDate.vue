<template>
  <div class="sidebar-article-details-author-date">
    <section>
      <font-awesome-icon icon="user" class="sidebar-icon" id="author-icon" />
      <p id="sidebar-article-details-author">{{ author }}</p>
    </section>
    <section>
      <font-awesome-icon
        icon="clock"
        class="sidebar-icon"
        id="published-icon"
      />
      <p id="sidebar-article-details-date">{{ published }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "AuthorAndDate",
  props: ["author", "published"],
};
</script>

<style lang="scss">
*,
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: var(--font);
}

.sidebar-article-details-author-date {
  display: flex;
  //flex-direction: column;
  flex-wrap: wrap;
}
.sidebar-article-details-author-date > section {
  display: flex;
}
.sidebar-article-details-author-date > section > p {
  font-size: 0.85rem;
  text-transform: uppercase;
  margin: 0 1.5rem 0 0;
}
.sidebar-icon {
  font-size: 1.3rem;
  padding-right: 4px;
}
#author-icon,
#published-icon {
  font-size: 1.3rem;
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
