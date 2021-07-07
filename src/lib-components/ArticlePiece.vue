<template>
  <div class="Test">Test</div>
</template>

<script>
export default {
  name: "ArticlePiece", // vue component
  prop: {
    authorName: "DANIEL BRISKMAN",
    date: "Jan 21, 2021",
    title: "Test",
  },
};
</script>

<style scoped>
.Test {
  background-color: black;
}
</style>
