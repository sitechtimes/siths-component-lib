<template>
  <div class="sidebar-container">
    <h1 class="sidebar-heading">Trending</h1>
    <sidebar
      category="opinion"
      author="Charley Baluja"
      published="Jan 31, 2020"
      title="Hello this is Dr. Death Defying: MCR ain't dead yet"
      imgUrl="../assets/temp image.jpg"
    /><!-- css var for imgUrl? -->
    <sidebar
      category="opinion"
      author="Michael Whalen"
      published="Sept 30, 2020"
      title="Short Title Testing Testing"
      imgUrl="../assets/temp image.jpg"
    />
    <sidebar
      category="opinion"
      author="Very Longnametest"
      published="Jan 31, 2020"
      title="Very Long Title Very Long Title Very Long Title Very Long Title"
      imgUrl="../assets/temp image.jpg"
    />
    <h1 class="sidebar-heading">More Like This</h1>
    <sidebar
      category="opinion"
      author="Charley Baluja"
      published="Jan 31, 2020"
      title="Hello this is Dr. Death Defying: MCR ain't dead yet"
      imgUrl="../assets/temp image.jpg"
    /><!-- css var for imgUrl? -->
    <sidebar
      category="opinion"
      author="Michael Whalen"
      published="Sept 30, 2020"
      title="Short Title Testing Testing"
      imgUrl="../assets/temp image.jpg"
    />
    <sidebar
      category="opinion"
      author="Very Longnametest"
      published="Jan 31, 2020"
      title="Very Long Title Very Long Title Very Long Title Very Long Title"
      imgUrl="../assets/temp image.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "SidebarContainer",
};
</script>

<style>
.sidebar-container {
  border-left: 2px solid #d9b75e;
}
.sidebar-heading {
  padding: 1.5rem 5rem;
  font-size: 3rem;
  font-weight: bold;
}
</style>
