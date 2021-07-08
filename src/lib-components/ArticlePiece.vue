<template>
  <div class="article flex-row">
    <div class="photo" alt="Temp Replacement"></div>
    <div class="flex-col left">
      <div class="flex-row top-right">
        <h1 class="txt-overflow category">Category</h1>
        <h2 class="txt-overflow author-name">FirstName LastName</h2>
        <h2 class=" date">MON XX, XXX</h2>
      </div>
      <div class="bottom-right">
        <h3 class="flex-col txt-overflow title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet.
        </h3>
      </div>
    </div>
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
@import url(/src/asset/_variables.scss);
@import url(/src/asset/global.scss);

.article {
  display: flex;
  width: 363px;
  height: 101px;
  /* border: red 1px solid; */
}
@media (min-width: 768px) {
  .article {
    width: 846px;
    height: 242px;
    flex-direction: row-reverse !important;
  }
}

.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}

.left {
  width: 225px;
  margin: 21px 14px 10px 0;
}
@media (min-width: 768px) {
  .left {
    width: 473px;
    margin: 20px 0 20px 51px;
  }
}

.top-left {
  height: 13.52px;
  padding-bottom: 7.48px;
  display: flex;
}
@media (min-width: 768px) {
  .top-left {
    height: 28px;
    padding-bottom: 20px;
  }
}

.category {
  background-color: var(--opinion);
  border-radius: 8px;
  padding: 3px 3.96px 3px 3.96px;
  width: auto;
  margin: 0 9.42px 0 0;

  color: var(--off-white);
  font-family: var(--font);
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .category {
    border-radius: 8px;
    padding: 5.5px 7.61px 6.5px 7.61px;
    width: auto;
    margin: 0 20px 0 0;

    font-size: 14px;
  }
}

.author-name {
  /* max-width: 105px; */
  margin: 3.86px 9.42px 0 0;

  text-align: right;
  font-family: var(--font);
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 8px;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .author-name {
    margin: 7.61px 15px 7.61px 0;
    font-size: 14px;
    line-height: 14px;
    width: 180px;
  }
}

.date {
  margin: 3.86px 0 0 0;
  font-family: var(--font);
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 8px;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .date {
    margin: 7.61px 0 7.61px 0;
    font-size: 14px;

    line-height: 14px;
  }
}

.title {
  margin: 0;
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
}
@media (min-width: 768px) {
  .title {
    margin: 0 0 34px 0;
    font-size: 25px;
    line-height: 30px;
  }
}

.photo {
  width: 124px;
  height: 101px;
  border-radius: 15px;
  background-color: var(--grey);
}
@media (min-width: 768px) {
  .photo {
    width: 339px;
    height: 242px;
    border-radius: 15px;
  }
}
</style>
