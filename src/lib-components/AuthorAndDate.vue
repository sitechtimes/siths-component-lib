<template>
  <div class="article-details-author-date">
    <svg  width="1.4rem" height="1.4rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="author-icon" class="icon svg-inline--fa fa-user fa-w-14"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" class=""></path></svg>
    <h5 id="article-details-author">{{ author }}</h5>
    <svg width="1.4rem" height="1.4rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="published-icon" class="icon svg-inline--fa fa-clock fa-w-16"><path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" class=""></path></svg>
    <h5 id="article-details-date">{{ published }}</h5>
  </div>
</template>

<script>
export default {
  name: "AuthorAndDate",
  props: ["author", "published"],
};
</script>

<style lang="scss">
@import '../assets/variables';
.article-details-author-date {
  display: flex;
}
.article-details-author-date > h5 {
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
--font

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