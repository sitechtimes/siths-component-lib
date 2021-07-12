<template>
  <div class="article-details-author-date">
    <font-awesome-icon icon="user" class="icon" id="author-icon" />
    <p id="article-details-author">{{ author }}</p>
    <font-awesome-icon icon="clock" class="icon" id="published-icon" />
    <p id="article-details-date">{{ published }}</p>
  </div>
</template>

<script>
export default {
  name: "AuthorAndDate",
  props: ["author", "published"],
};
</script>

<style lang="scss">
.article-details-author-date {
  display: flex;
}
.article-details-author-date > p {
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-right: 1.5rem;
}
.icon {
  font-size: 1.4rem;
  padding-right: 4px;
}
#author-icon,
#published-icon {
  font-size: 1.8rem;
}
</style>

<docs>
This component is used in a variety of other Components to form a preview of an article. It shows the date it was published and the author's name side-by-side after both props are entered.

## Variables Used:
--font: Which controls the font of the page. If for whatever reason the font is changed in a theme, it will change here.

## Examples
Enter in an Author and Date to see the dynamic change.

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