<template>
  <div class="article-details-author-date">
    <svg width="1.8rem" height="1.8rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="published-icon" class="icon svg-inline--fa fa-clock fa-w-16"><path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" class=""></path></svg>
    <p id="article-details-author">{{ author }}</p>
    <svg width="1.8rem" height="1.8rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="published-icon" class="icon svg-inline--fa fa-clock fa-w-16"><path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" class=""></path></svg>
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