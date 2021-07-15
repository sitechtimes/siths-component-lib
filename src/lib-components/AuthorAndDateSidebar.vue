<template>
  <div class="sidebar-article-details-author-date">
    <section>
      <svg
        width="1.3rem"
        height="1.3rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="user"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        id="sidebar-author-icon"
        class="sidebar-icon svg-inline--fa fa-user fa-w-14"
      >
        <path
          fill="currentColor"
          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
          class=""
        ></path>
      </svg>
      <h5 id="sidebar-article-details-author">{{ author }}</h5>
    </section>
    <section>
      <svg
        width="1.3rem"
        height="1.3rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="clock"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        id="sidebar-published-icon"
        class="sidebar-icon svg-inline--fa fa-clock fa-w-16"
      >
        <path
          fill="currentColor"
          d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
          class=""
        ></path>
      </svg>
      <h5 id="sidebar-article-details-date">{{ published }}</h5>
    </section>
  </div>
</template>

<script>
export default {
  name: "AuthorAndDateSidebar",
  props: ["author", "published"],
};
</script>

<style lang="scss">
@import '../assets/variables';
.sidebar-article-details-author-date {
  display: flex;
  //flex-direction: column;
  flex-wrap: wrap;
}
.sidebar-article-details-author-date > section {
  display: flex;
}
.sidebar-article-details-author-date > section > h5 {
  font-size: 0.85rem;
  text-transform: uppercase;
  margin: 0 1.5rem 0 0;

  line-height: 1.75;
}
.sidebar-icon {
  font-size: 1.3rem;
  padding-right: 4px;
}
#sidebar-author-icon,
#sidebar-published-icon {
  font-size: 1.3rem;
}
</style>

<docs>
This component is the same as above, with different width and height

## Variables Used:
--font: 
## Examples
Enter in an Author and Date to see the dynamic change.

```jsx
<author-and-date author="Charley Baluja" published="Jan 31, 2020" />
```


</docs>
