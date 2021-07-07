<template>
  <div class="article flex-row">
    <div class="flex-col left">
      <div class="flex-row top-left">
        <h1 class="category">{{ category }}</h1>
        <h2 class="author-name">{{ authorName }}</h2>
        <h2 class="date">{{ date }}</h2>
      </div>
      <div class="bottom-left">
        <h3 class="flex-col title">
          {{ title }}
        </h3>
      </div>
    </div>

    <div class="photo" alt="Temp Replacement"></div>
  </div>
</template>

<script>
export default {
  name: "ArticlePiece", // vue component
  props: {
    authorName: String,
    date: String,
    title: String,
    category: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&display=swap");

.article {
  display: flex;
  width: 846px;
  height: 242px;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.left {
  width: 473px;
  margin: 20px 34px 20px 0;
}

.top-left {
  height: 28px;
  padding-bottom: 20px;
  display: flex;
}

.category {
  background-color: #6638e9;
  border-radius: 8px;
  height: 15px;
  padding: 8px 8px 3px 8px;
  width: auto;
  margin: 0 47.62px 0 0;

  color: #fff;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
}
.author-name {
  margin: 7px 34px 0 0;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
}

.date {
  margin: 7px 0 0 0;
  text-align: center;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
}
.title {
  margin: 0 0 34px 0;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
}

.photo {
  width: 339px;
  height: 242px;
  border-radius: 15px;
  border: 1px solid red;
  background-color: grey;
}
</style>
