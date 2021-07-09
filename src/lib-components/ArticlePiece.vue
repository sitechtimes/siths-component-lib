<template>
  <div class="article">
    <div class="text-box flex-direction-column">

      <div class="text-box-top flex-direction-row">
        <h5 class="category">{{category}}</h5>
        <h5 class="author author-overflow">{{author}}</h5>
        <h5 class="date">{{date}}</h5>
      </div>

      <div class="text-box-btm ">
        <p class="title title-overflow">{{title}}</p>
      </div>

    </div>
    <div class="img" alt="Temp Replacement"></div>

  </div>
</template>

<script>
export default {
  name: "ArticlePiece",
  props: {
    author: String,
    date: String,
    title: String,
    category: String,
  },
};
</script>


<style lang="scss">
:root {
  --filler: var(--grey);
  --imgSmallWidth: 124px;
  --imgSmallHeight: 101px;
  --imgLargeWidth: 351px ;
  --imgLargeHeight: 231px;
  --imgSmallBorderRadius:  6.27423px;
  --imgLargeBorderRadius: 15px;

  --fontSmallScreenSmall:8px;
  --fontSmallScreenLarge:14px; 
  --fontLargeScreenSmall: 14px;
  --fontLargeScreenLarge: 25px ;

  --textBoxTopHeightSmall:13.52px ;
  --textBoxTopHeightLarge: 24.39px;

  --textBoxBottomHeightSmall:49px;
  --textBoxBottomWidthSmall: 225px;
  --textBoxBottomHeightLarge: 97px;
  --textBoxBottomWidthLarge: 443px;
}

html,
body {
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: var(--font);
}
.flex-direction-column {
  display: flex;
  flex-direction: column;
}
.flex-direction-row {
  display: flex;
  flex-direction: row;
}

.img {
  background: var(--filler);
  width: var(--imgSmallWidth);
  height: var(--imgSmallHeight);
  border-radius: var(--imgSmallBorderRadius);
}
@media only screen and (min-width: $large-screen){
  .img{
    width: var(--imgLargeWidth);
    height: var(--imgKLargeHeight);
    border-radius: var(--imgLargeBorderRadius);
  }
}

.article {
  width: 363px;
  height: 101px;
  display: flex;
  flex-direction: row !important;
}
@media only screen and (min-width: $large-screen) {
  .article {
    width: 846px;
    height: 242px;
    flex-direction: row-reverse !important;
}
}
.text-box {
  margin: 21px 14px 10px 0;
}
@media only screen and (min-width: $large-screen) {
  .text-box {
    margin: 25px 0 0 51px;
    width:443px;
  }
}


.text-box-top {
  margin-bottom: 7.48px ;
}


.category, .author, .date {
  font-family: var(--font);
  font-size: var(--fontSmallScreenSmall);
  line-height: var(--fontSmallScreenSmall);
  text-transform: uppercase;

  padding-top: 3.86px;
}
@media only screen and (min-width: $large-screen){
  .category, .author, .date {
  font-size: var(--fontLargeScreenSmall);
  line-height: var(--fontLargeScreenSmall);
  

  padding-top: 6.97px ;
}
}

.category {
  background-color: var(--opinion) ;
  color: var(--white);

  padding: 3.86px 3.96px 2.9px 3.96px;
  border-radius: 7px;
  margin-right:31.01px;
  height: 13.52px;
}
@media only screen and (min-width: $large-screen){
  .category {
    margin-right: 39px;
    padding: 6.97px 7.61px 5.23px 7.61px;
    border-radius: 8px;

    height: 24.39px;
    
  }
}

.author-overflow {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2; //The Number of Lines Shown Before Cutting Off the Text
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


.author {
  margin-right: 9.16px;
  width: 82px;
}
@media only screen and (min-width: $large-screen){
  .author {
    width: 156px;
    margin-right: 22px;
  }
}


.text-box-btm {
  height: var(--textBoxBottomHeightSmall);
  width: var(--textBoxBottomWidthSmall)
}
@media only screen and (min-width: $large-screen){
  .text-box-btm {
    height: var(--textBoxBottomHeightLarge);
  width: var(--textBoxBottomWidthlarge)
  }
}
.title-overflow{
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3; //The Number of Lines Shown Before Cutting Off the Text
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media only screen and (min-width: $large-screen){
  .text-overflow {
    -webkit-line-clamp: 5;
  }
}
.title {
  font-family: var(--font);
  font-size: var(--fontSmallScreenLarge);
  line-height: 15px ;
  font-weight: bold;
}
@media only screen and (min-width: $large-screen){
  .title {
    font-size: var(--fontLargeScreenLarge);
  line-height: 30px ;
  font-weight: bold;
  }
}
  
</style>